import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { Category } from "./categories/categories.model";
import { Product } from "./products/products.model";
import { CustomersModule } from './customers/customers.module';
import { CartsModule } from './carts/carts.module';
import { FilesUploadingModule } from './files-uploading/files-uploading.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { AuthModule } from './auth/auth.module';
import * as path from "path";
import { Customer } from "./customers/customers.model";
import { Cart } from "./carts/carts.model";
import { CommentsModule } from './comments/comments.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { Comment } from "./comments/comments.model";
import { CustomerRoles } from "./roles/customer-roles.model";



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static')
    }),
    SequelizeModule.forRoot({
      dialect:'postgres',
      password:process.env.POSTGRES_PASSWORD,
      username:process.env.POSTGRES_USERNAME,
      port: +process.env.POSTGRES_PORT,
      host:process.env.POSTGRES_HOST,
      database:process.env.POSTGRES_DB,
      models:[Category, Product, Customer, Cart,Role, Comment, CustomerRoles],
      autoLoadModels:true,
      sync:{force:true}
    }),
    ProductsModule,
    CategoriesModule,
    CustomersModule,
    CartsModule,
    FilesUploadingModule,
    AuthModule,
    CommentsModule,
    RolesModule,

    //[Другие модули]
  ],

})
export class AppModule {}
