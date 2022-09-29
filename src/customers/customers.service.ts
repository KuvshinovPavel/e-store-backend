import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./customers.model";
import { AddCustomerDto } from "./dto/add-customer.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class CustomersService {

  constructor(@InjectModel(Customer) private customerRepository: typeof Customer,
              private roleService: RolesService) {
  }

  async addCustomer(dto: AddCustomerDto) {
    const user = await this.customerRepository.create(dto);
    const role = await this.roleService.getRoleByValue("CUSTOMER");
    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }

  async getAll() {
    return await this.customerRepository.findAll();
  }

  async getCustomerByEmail(email: string) {
    const user = await this.customerRepository.findOne({
      where: {
        email
      },
      include: {
        all: true
      }
    });
    return user;
  }
}
