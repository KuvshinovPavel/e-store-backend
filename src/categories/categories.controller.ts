import { Body, Controller, Get, Post } from "@nestjs/common";
import { AddCategoryDto } from "./dto/add-category.dto";
import { CategoriesService } from "./categories.service";

@Controller('categories')
export class CategoriesController {

  constructor(private categoriesService: CategoriesService) {
  }

  @Get()
  getAll(){
    return this.categoriesService.getAll();
  }


  @Post()
  addCategory(@Body() dto: AddCategoryDto) {
     return this.categoriesService.addCategory(dto);
  }

}
