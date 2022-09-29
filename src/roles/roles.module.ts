import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./roles.model";
import { CustomerRoles } from "./customer-roles.model";
import { Customer } from "../customers/customers.model";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports:[
    SequelizeModule.forFeature([Role, CustomerRoles, Customer])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
