import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "./products.model";
import { Category } from "../categories/categories.model";
import { FilesUploadingModule } from "../files-uploading/files-uploading.module";

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports:[
    FilesUploadingModule,
SequelizeModule.forFeature([Product, Category])
  ]
})
export class ProductsModule {}
