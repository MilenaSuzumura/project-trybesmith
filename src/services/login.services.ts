import jwt from '../jwt';
import UsersModel from '../models/users.model';

export default class LoginService {
  usersModel = new UsersModel();

  async login(username: string, password: string) {
    const user = await this.usersModel.getUser(username, password);
    if (user[0] === undefined) {
      return {
        message: 'Username or password invalid',
      };
    }
    const userWithoutPassword = {
      id: user[0].id, username: user[0].username, classe: user[0].classe, level: user[0].level,
    };
    const token = jwt.createToken(userWithoutPassword);
    return { token };
  }
}

/* const verificaLogin = async (email, password) => {
  const user = await findByEmail(email);
  // console.log(user);
  const resultado = {
    status: 0,
    message: '',
    token: '',
  };

  if (!user || user.password !== password) {
    resultado.status = 400;
    resultado.message = 'Invalid fields';
    return resultado;
  }
  
  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);

  resultado.status = 200;
  resultado.token = token;
  return resultado;
}; */
