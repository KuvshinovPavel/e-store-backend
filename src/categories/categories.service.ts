import { Injectable } from '@nestjs/common';
import { AddCategoryDto } from "./dto/add-category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Category, CategoryAttributes } from "./categories.model";

@Injectable()
export class CategoriesService {


  constructor(@InjectModel(Category) private categoriesRepository: typeof Category) {
  }

  async addCategory(dto: AddCategoryDto) {
    return await this.categoriesRepository.create(dto);
  }

  async getAll() {
    const categories = await this.categoriesRepository.findAll({});
    const categoriesToReturned:CategoryAttributes[] = categories.map(c=>({id: c.id, categoryName: c.categoryName,  parentId:c.parentId,subCategories:[]}));
    //TODO ЕБЛЯ С ДРЕВЬЯМИ
     const treedItems:CategoryAttributes[] = []
    for (let i = 0; i < categoriesToReturned.length; i++) {
      let a = categoriesToReturned[i];
      for (let j = 0; j < categoriesToReturned.length; j++) {

        let b = categoriesToReturned[j];
        if (a.id === b.parentId) {
          a.subCategories.push(b);
        }



      }
      if (!a['parentId']) {
        treedItems.push(a);
      }
    }
    //TODO END
    return treedItems;
  }



}
