import ProductsModel from '../models/products.model';
import { IProducts } from '../products';

export default class ProductsService {
  productsModel = new ProductsModel();

  async getAllProducts(): Promise<IProducts[]> {
    const products = await this.productsModel.getAllProducts();
    return products;
  }

  async createProduct(info: IProducts): Promise<IProducts> {
    const products = await this.productsModel.createProduct(info.name, info.amount);
    return products;
  }
}
