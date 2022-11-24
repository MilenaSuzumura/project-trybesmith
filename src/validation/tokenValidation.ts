import { Request, Response, NextFunction } from 'express';

const verificacaoToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  next();
};

export default {
  verificacaoToken,
};