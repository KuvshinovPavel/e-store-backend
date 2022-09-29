import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "./roles.model";
import { Customer } from "../customers/customers.model";

@Table({ tableName: "customer_roles", createdAt: false, updatedAt: false })
export class CustomerRoles extends Model {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number

  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER })
  customerId: number
}