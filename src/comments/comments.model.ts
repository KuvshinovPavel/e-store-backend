import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Customer } from "../customers/customers.model";
import { Product } from "../products/products.model";

@Table({tableName: 'comments',updatedAt: false})
export class Comment extends Model {
  @Column({ primaryKey: true, unique: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  productId: number;

  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  customerId: number;
}