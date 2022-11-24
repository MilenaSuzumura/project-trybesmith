import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUsers } from '../users';

export default class UsersModel {
  connection = connection;

  async createUser(username: string, classe: string, level: number, password: string):
  Promise<IUsers> {
    const resultSetHeader = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { insertId } = resultSetHeader[0];
    const user = {
      id: insertId,
      username,
      classe,
      level,
      password,
    };

    return user;
  }

  async getUser(username: string, password: string): Promise<IUsers[]> {
    const [user] = await this.connection.execute<IUsers[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    return user;
  }

  async getUserInfo(id: number): Promise<IUsers[]> {
    const [user] = await this.connection.execute<IUsers[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE id=?',
      [id],
    );

    return user;
  }
}