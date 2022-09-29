import { Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { AddProductDto } from "./dto/add-product.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("products")
export class ProductsController {

  constructor(private productsService: ProductsService) {
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/fetch')
  fetchProductById(@Query('id') id: number){
    return this.productsService.fetchProductById(id);
  }
  @Get('/fetchbyc/')
  fetchProductsByCategory(@Query('cid') categoryId: number){
    return this.productsService.fetchProductsByCategory(categoryId);
  }

  @Get('/find')
  findProductBySubstring(@Query("s") substring: string) {
    return this.productsService.findProductBySubstring(substring);
  }


  @Post()
  @UseInterceptors(FileInterceptor('image'))
  addProduct(@Body() dto: AddProductDto, @UploadedFile () image) {

    return this.productsService.addProduct(dto, image);
  }

  @Delete()
  deleteProduct(@Query("id") id: number) {
    return this.productsService.deleteProduct(id);
  }

  @Put()
  updateProduct() {
    return this.productsService.updateProduct();
  }


}
