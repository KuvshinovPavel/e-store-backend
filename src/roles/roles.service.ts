import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./roles.model";
import { CreateRoleDto } from "./dto/create-role.dto";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role)private rolesRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    return await this.rolesRepository.create(dto);
  }


  async getRoleByValue(value: string) {
    return await this.rolesRepository.findOne({ where: {value}  })
  }

}
