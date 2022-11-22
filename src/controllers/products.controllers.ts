import { Request, Response } from 'express';
import ProductsService from '../services/products.services';
import statusNumber from '../statusNumber';

export default class ProductsControllers {
  productsService = new ProductsService();
  
  async getAllProducts(_req: Request, res: Response) {
    const products = await this.productsService.getAllProducts();
    res.status(statusNumber.get).json(products);
  }
/*   async cadastroProduto(req: Request, res: Response) {
    res.status(statusNumber.create).json(req.body);
  }; */
}