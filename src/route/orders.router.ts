import { Router } from 'express';
import OrdersControllers from '../controllers/orders.controllers';

const ordersRoute = Router();
const ordersControllers = new OrdersControllers();

ordersRoute.get('/', ordersControllers.getAllOrders.bind(ordersControllers));
/* 
productsRoute.get('/', productsControllers.getAllProducts.bind(productsControllers));
productsRoute.post('/', productsControllers.cadastroProduto.bind(productsControllers)); */

export default ordersRoute;