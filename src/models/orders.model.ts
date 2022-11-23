import { RowDataPacket } from 'mysql2';
import { IOrders } from '../orders';
import connection from './connection';

export default class OrdersModel {
  connection = connection;

  async listarOrders(): Promise<IOrders[]> {
    const [order] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      `SELECT orders.id AS id,
      orders.userId AS userId,
      json_arrayagg(product.id) AS productsIds
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS product
      ON orders.id = product.orderId
      GROUP BY orders.id`,
    );
    return order;
  }
}