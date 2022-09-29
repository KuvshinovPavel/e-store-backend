import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Customer } from "../customers/customers.model";
import { CustomerRoles } from "./customer-roles.model";

interface RoleAttributes {
  value: string
}

@Table({tableName:'roles' ,createdAt: false, updatedAt: false})
export class Role extends Model<Role, RoleAttributes>{

  @Column({ primaryKey: true, unique: true, autoIncrement: true, type: DataType.INTEGER })
  id: number

  @Column({ unique: true, type: DataType.STRING })
  value: string


  @BelongsToMany(()=>Customer,()=>CustomerRoles)
  customers: Customer[]


}