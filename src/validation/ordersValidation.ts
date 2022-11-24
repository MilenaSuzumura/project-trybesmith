import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const schema = Joi.object({
  productsIds: Joi.array().min(1).required().messages({
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
    'any.required': '"productsIds" is required',
  }),
});

const validationOrders = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.message });
  }

  if (error) {
    return res.status(422).json({ message: error.message });
  }

  next();
};

export default {
  validationOrders,
};