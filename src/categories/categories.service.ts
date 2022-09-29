import { Injectable } from '@nestjs/common';
import { AddCategoryDto } from "./dto/add-category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./categories.model";

@Injectable()
export class CategoriesService {


constructor(@InjectModel(Category) private categoriesRepository: typeof Category) {
}

  async addCategory(dto: AddCategoryDto) {
    return await this.categoriesRepository.create(dto);
  }

  async getAll() {
    return await this.categoriesRepository.findAll({});
  }
}
