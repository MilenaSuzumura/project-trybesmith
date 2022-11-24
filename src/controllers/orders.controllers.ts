import { Request, Response } from 'express';
import OrdersService from '../services/orders.services';
import statusNumber from '../statusNumber';

export default class UsersControllers {
  ordersService = new OrdersService();

  async getAllOrders(req: Request, res: Response) {
    const orders = await this.ordersService.getAllOrders();
    res.status(statusNumber.get).json(orders);
  }

  async cadastraCompra(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (authorization) {
      const result = await this.ordersService
        .cadastrarCompraService(authorization, req.body.productsIds);
      return res.status(201).json(result);
    }
  }
}