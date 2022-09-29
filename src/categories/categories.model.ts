import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CategoryAttributes {
  categoryName: string;
}

@Table({ tableName: "categories", createdAt: false, updatedAt: false })
export class Category extends Model<Category, CategoryAttributes> {
  @Column({ primaryKey: true, unique: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  categoryName: string;


}