import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

  async cadastraCompra(userId: number, productsIds: number[]): Promise<IOrders> {
    const resultSetHeader = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
  
    const { insertId } = resultSetHeader[0];
    const id = insertId;

    await Promise.all(productsIds.map(async (productid) => {
      await this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
        [id, productid],
      );
    }));

    const orderCompra = {
      id,
      userId,
      productsIds,
    };
    return orderCompra;
  }
}