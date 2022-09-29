import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "../categories/categories.model";

interface ProductAttributes {
  title: string;
  description: string;
  image: string;
  price: number;
  categoryId: number;
}


@Table({ tableName: "products" })
export class Product extends Model<Product, ProductAttributes> {
  @Column({ primaryKey: true, unique: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;


  @Column({ type: DataType.STRING, allowNull: false })
  image: string;


  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId: number;


}