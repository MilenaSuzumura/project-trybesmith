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

const userValidation = Joi.object({
  username: Joi.string().min(3).required()
    .messages({
      'string.base': '"username" must be a string',
      'string.min': '"username" length must be at least 3 characters long',
      'any.required': '"username" is required',
    }),
  classe: Joi.string().min(3).required().messages({
    'string.base': '"classe" must be a string',
    'string.min': '"classe" length must be at least 3 characters long',
    'any.required': '"classe" is required',
  }),
  level: Joi.number().min(1).required().messages({
    'number.base': '"level" must be a number',
    'number.min': '"level" must be greater than or equal to 1',
    'any.required': '"level" is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.base': '"password" must be a string',
    'string.min': '"password" length must be at least 8 characters long',
    'any.required': '"password" is required',
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

const validationUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userValidation.validate(req.body);
  if (error?.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.message });
  }

  if (error?.message) {
    return res.status(422).json({ message: error.message });
  }

  next();
};

export default {
  validationProduct,
  validationUser,
};