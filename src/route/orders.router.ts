import { Router } from 'express';
import OrdersControllers from '../controllers/orders.controllers';
import ordersValidation from '../validation/ordersValidation';
import tokenValidation from '../validation/tokenValidation';

const ordersRoute = Router();
const ordersControllers = new OrdersControllers();

ordersRoute.get('/', ordersControllers.getAllOrders.bind(ordersControllers));
ordersRoute.post(
  '/',
  tokenValidation.verificacaoToken,
  ordersValidation.validationOrders,
  ordersControllers.cadastraCompra.bind(ordersControllers),
);

export default ordersRoute;