import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CustomersService } from "../customers/customers.service";
import { JwtService } from "@nestjs/jwt";
import { UserLoginDto } from "./dto/user-login.dto";
import { AddCustomerDto } from "../customers/dto/add-customer.dto";
import { Customer } from "../customers/customers.model";
import * as bcrypt from "bcryptjs";


@Injectable()
export class AuthService {

  constructor(private customersService: CustomersService,
              private jwtService: JwtService) {
  }


  async login(dto: UserLoginDto) {
    const customer = await this.validateUser(dto);
    return this.generateToken(customer);
  }


  async register(dto: AddCustomerDto) {
    const candidate = await this.customersService.getCustomerByEmail(dto.email);

    if (candidate) {
      throw new HttpException("Customer already exists", HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(dto.password, 5);
    const customer = await this.customersService.addCustomer({ ...dto, password: hashPassword });
    return this.generateToken(customer);


  }

  private async validateUser(dto: UserLoginDto) {
    const user = await this.customersService.getCustomerByEmail(dto.email);
    const passwordEquals = await bcrypt.compare(dto.password, user.password);

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException();
  }

  private generateToken(customer: Customer) {
    const payload = {
      email: customer.email,
      id: customer.id,

    }
    return {
      token: this.jwtService.sign(payload),
      customer: customer
    }

  }
}
