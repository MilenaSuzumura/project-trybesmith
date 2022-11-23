import { Request, Response } from 'express';
import OrdersService from '../services/orders.services';
import statusNumber from '../statusNumber';

export default class UsersControllers {
  ordersService = new OrdersService();

  async getAllOrders(req: Request, res: Response) {
    const orders = await this.ordersService.getAllOrders();
    res.status(statusNumber.get).json(orders);
  }
}