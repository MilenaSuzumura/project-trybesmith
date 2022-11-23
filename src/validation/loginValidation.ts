import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const schema = Joi.object({
  username: Joi.string().required()
    .messages({
      'any.required': '"username" is required',
    }),
  password: Joi.string().required().messages({
    'any.required': '"password" is required',
  }),
});

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error?.details[0].type === 'any.required') {
    return res.status(400).json({ message: error?.message });
  }
  next();
};

export default {
  loginValidation,
};