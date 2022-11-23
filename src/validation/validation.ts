import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const productValidation = Joi.object({
  name: Joi.string().min(2).required()
    .messages({
      'string.base': '"name" must be a string',
      'string.min': '"name" length must be at least 3 characters long',
      'any.required': '"name" is required',
    }),
  amount: Joi.string().min(2).required().messages({
    'string.base': '"amount" must be a string',
    'string.min': '"amount" length must be at least 3 characters long',
    'any.required': '"amount" is required',
  }),
});

const validationProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productValidation.validate(req.body);
  if (error?.message === '"name" is required' || error?.message === '"amount" is required') {
    return res.status(400).json({ message: error.message });
  }

  if (error?.message) {
    return res.status(422).json({ message: error.message });
  }

  next();
};

export default {
  validationProduct,
};