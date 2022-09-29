import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Customer } from "../customers/customers.model";
import { Cart } from "./carts.model";

@Module({
  providers: [CartsService],
  controllers: [CartsController],
  imports:[
    SequelizeModule.forFeature([Customer, Cart])
  ]
})
export class CartsModule {}
