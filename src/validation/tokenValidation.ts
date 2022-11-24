import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
// import UsersModel from '../models/users.model';

const verificacaoToken = (req: Request, res: Response, next: NextFunction) => {
  // const usersModel = new UsersModel();
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  jwt.verify(authorization, String(process.env.JWT_SECRET), (err, _decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  });

  next();
};

export default {
  verificacaoToken,
};