import { Router } from 'express';
import UsersControllers from '../controllers/users.controllers';
import validation from '../validation/validation';

const usersRoute = Router();
const usersControllers = new UsersControllers();

usersRoute.post(
  '/',
  validation.validationUser,
  usersControllers.createUser.bind(usersControllers),
);

export default usersRoute;