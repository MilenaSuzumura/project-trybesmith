import UsersModel from '../models/users.model';
import { IUsers } from '../users';
import jwt from '../jwt';

export default class ProductsService {
  usersModel = new UsersModel();

  async createUser(info: IUsers): Promise<object> {
    const { username, classe, level, password } = info;
    const user = await this.usersModel.createUser(username, classe, level, password);
    const userWithoutPassword = {
      id: user.id, username: user.username, classe: user.classe, level: user.level,
    };
    const token = jwt.createToken(userWithoutPassword);
    return { token };
  }
}