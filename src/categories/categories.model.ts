import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

export interface CategoryAttributes {
  id: number
  categoryName: string;
parentId: number| null;
subCategories: CategoryAttributes[]
}

@Table({ tableName: "categories", createdAt: false, updatedAt: false })
export class Category extends Model<Category, CategoryAttributes> {
  @Column({ primaryKey: true, unique: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  categoryName: string;

  @ForeignKey(()=> Category)
  @Column({type: DataType.INTEGER, allowNull:true, defaultValue:null})
  parentId: number;

  subCategories: Category[]



}