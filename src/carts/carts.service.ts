import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Cart } from "./carts.model";

@Injectable()
export class CartsService {
  constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {
  }

  async assignCustomer(customerId: number) {
    await this.cartRepository.create({ customerId });
  }


}
