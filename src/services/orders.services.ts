import jwtDecode from 'jwt-decode';
import { IData } from '../dataInterface';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  ordersModel = new OrdersModel();

  async getAllOrders(): Promise<object> {
    const orders = await this.ordersModel.listarOrders();
    return orders;
  }

  // referencia Token: https://github.com/auth0/node-jsonwebtoken/issues/757
  async cadastrarCompraService(authorization: string, productsIds: number[]) {
    const decoded = jwtDecode<IData>(authorization);
    const { id } = decoded.data;
    const cadastro = await this.ordersModel.cadastraCompra(id, productsIds);
    return cadastro;
  }
}