import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./products.model";
import { Op } from "sequelize";
import { AddProductDto } from "./dto/add-product.dto";
import { FilesUploadingService } from "../files-uploading/files-uploading.service";

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product) private productRepository: typeof Product,
              private filesService: FilesUploadingService) {
  }


  async findAll() {
    return await this.productRepository.findAll({});
  }


  async findProductBySubstring(substring: string) {
    return await this.productRepository.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${substring}%` } },
          { description: { [Op.iLike]: `%${substring}%` } }
        ]
      }
    });
  }


  async addProduct(dto: AddProductDto, image) {
    const fileName = await this.filesService.createImage(image);
    return await this.productRepository.create({ ...dto, image: fileName });
  }


  async deleteProduct(id: number) {
    await this.productRepository.destroy({ where: { id } });
  }


  async updateProduct() {

  }


  async fetchProductById(id: number) {
    return await this.productRepository.findOne({ where: { id } });
  }

  async fetchProductsByCategory(categoryId: number) {
    return await this.productRepository.findAll({ where: { categoryId } });
  }
}
