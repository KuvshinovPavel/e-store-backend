import { forwardRef, Module } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { CustomersController } from "./customers.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Customer } from "./customers.model";
import { AuthModule } from "../auth/auth.module";
import { Role } from "../roles/roles.model";
import { CustomerRoles } from "../roles/customer-roles.model";
import { Comment } from "../comments/comments.model";
import { RolesModule } from "../roles/roles.module";
import { Cart } from "../carts/carts.model";

@Module({
  providers: [CustomersService],
  controllers: [CustomersController],
  imports: [
    forwardRef(() => AuthModule),
    RolesModule,
    SequelizeModule.forFeature([Customer, Role, CustomerRoles, Comment, Cart])
  ],
  exports: [CustomersService]
})
export class CustomersModule {
}
