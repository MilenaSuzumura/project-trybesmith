import { Router } from 'express';
import LoginControllers from '../controllers/login.controllers';
import loginValidation from '../validation/loginValidation';

const loginRoute = Router();
const loginControllers = new LoginControllers();

loginRoute.post(
  '/',
  loginValidation.loginValidation,
  loginControllers.login.bind(loginControllers),
);

export default loginRoute;