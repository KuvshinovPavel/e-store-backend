import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { CustomerRoles } from "../roles/customer-roles.model";
import { Comment } from "../comments/comments.model";

interface CustomerAttributes {
  firstname: string;
  lastname: string;
  password: string;
  email: string;

}


@Table({ tableName: "customers" })
export class Customer extends Model<Customer, CustomerAttributes> {
  @Column({ primaryKey: true, unique: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  firstname: string;

  @Column({ type: DataType.STRING, allowNull: false })
  lastname: string;


  @Column({ type: DataType.STRING, allowNull: false })
  password: string;


  @Column({ unique: true, type: DataType.STRING, allowNull: false })
  email: string;


  @BelongsToMany(() => Role, () => CustomerRoles)
  roles: Role[];

//   @HasMany(()=>Comment)
// comments: Comment

}