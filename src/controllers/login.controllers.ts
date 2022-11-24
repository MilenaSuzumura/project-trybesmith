import { Request, Response } from 'express';
import LoginService from '../services/login.services';

export default class LoginControllers {
  loginService = new LoginService();

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await this.loginService.login(username, password);
    if (user?.message !== undefined) {
      return res.status(401).json(user);
    }
    return res.status(200).json(user);
  }
}
