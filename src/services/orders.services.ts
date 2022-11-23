import OrdersModel from '../models/orders.model';

export default class OrdersService {
  ordersModel = new OrdersModel();

  async getAllOrders(): Promise<object> {
    const orders = await this.ordersModel.listarOrders();
    return orders;
  }
}