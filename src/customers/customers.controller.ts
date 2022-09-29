import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { AddCustomerDto } from "./dto/add-customer.dto";
import { RolesGuard } from "../auth/roles.guard";

@Controller("customers")
export class CustomersController {

  constructor(private customerService: CustomersService) {
  }

  @Post()
  addCustomer(@Body() dto: AddCustomerDto) {
    return this.customerService.addCustomer(dto);
  }

  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.customerService.getAll();
  }

}


// TODO => ADD CUSTOMER AND ASSIGN CART TO  HIM
//TODO => HASH PASSWORDS