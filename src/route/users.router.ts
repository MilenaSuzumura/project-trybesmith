import { Router } from 'express';
import UsersControllers from '../controllers/users.controllers';

const usersRoute = Router();
const usersControllers = new UsersControllers();

usersRoute.post('/', usersControllers.createUser.bind(usersControllers));

export default usersRoute;