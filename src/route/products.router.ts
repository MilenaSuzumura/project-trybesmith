import { Router } from 'express';
import ProductsControllers from '../controllers/products.controllers';
import validation from '../validation/validation';

const productsRoute = Router();
const productsControllers = new ProductsControllers();

productsRoute.get('/', productsControllers.getAllProducts.bind(productsControllers));
productsRoute.post(
  '/',
  validation.validationProduct,
  productsControllers.cadastroProduto.bind(productsControllers),
);

export default productsRoute;