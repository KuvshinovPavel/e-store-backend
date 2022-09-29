import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "../customers/customers.model";


interface CartsAttributes {
  customerId: number;
}


@Table({ tableName: "carts", createdAt: false, updatedAt: false })
export class Cart extends Model<Cart, CartsAttributes> {
  @Column({ primaryKey: true, unique: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  customerId: number;


}