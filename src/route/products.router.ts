import { Router } from 'express';
import ProductsControllers from '../controllers/products.controllers';

const productsRoute = Router();
const productsControllers = new ProductsControllers();

productsRoute.get('/', productsControllers.getAllProducts.bind(productsControllers));
// productsRoute.post('/products', productsControllers.cadastroProduto);

export default productsRoute;