import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProducts } from '../products';

export default class ProductsModel {
  connection = connection;

  async getAllProducts(): Promise<IProducts[]> {
    const [products] = await this.connection.execute<IProducts[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return products;
  }
}

/*   async createProduct(name: string, amount: string): Promise<IProducts> {
    const [result] = await this.connection.execute(
      'INSERT INTO products (name, amount) VALUES (?, ?)', [name, amount],
    ); */

/* const createProduct = async (name, amount) => {
  const [result] = await connection.execute(
    'INSERT INTO products (name, amount) VALUES (?, ?)', [name, amount],
  );

  const newProduct = {
    id: result.insertId,
    name,
    amount,
  };

  return newProduct;
}; 

export default class ProductsModel {
  connection = connection;

  async createProduct(name, amount): Promise<> {
    const [result] = await this.connection.execute(
      'INSERT INTO products (name, amount) VALUES (?, ?)', [name, amount],
    );
  }
} */