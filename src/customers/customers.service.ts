import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./customers.model";
import { AddCustomerDto } from "./dto/add-customer.dto";
import { RolesService } from "../roles/roles.service";
import { CartsService } from "../carts/carts.service";
import { Cart } from "../carts/carts.model";

@Injectable()
export class CustomersService {

  constructor(@InjectModel(Customer) private customerRepository: typeof Customer,
              @InjectModel(Cart) private cartRepository: typeof Cart,
              private roleService: RolesService,) {
  }
//FIXME added cart to customer
  async addCustomer(dto: AddCustomerDto) {
    const user = await this.customerRepository.create(dto);
    const cart = await this.cartRepository.create({customerId:1, name: 'KSJAKS' })
    const role = await this.roleService.getRoleByValue("CUSTOMER");
    await user.$set("roles", [role.id]);
    await user.$set("cart",[cart.id]);
    user.roles = [role];
    user.cart=cart

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
