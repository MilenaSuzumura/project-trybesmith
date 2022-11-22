import { Request, Response } from 'express';
import UsersService from '../services/users.services';
import statusNumber from '../statusNumber';

export default class UsersControllers {
  usersService = new UsersService();

  async createUser(req: Request, res: Response) {
    const token = await this.usersService.createUser(req.body);
    res.status(statusNumber.create).json(token);
  }
}