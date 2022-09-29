import { Body, Controller, Post } from "@nestjs/common";
import { CartsService } from "./carts.service";

@Controller('carts')
export class CartsController {

  constructor(private cartsService: CartsService) {
  }

  @Post('/assign')
  assignCustomer(@Body() dto){
    return this.cartsService.assignCustomer(dto.customerId);
  }


}
