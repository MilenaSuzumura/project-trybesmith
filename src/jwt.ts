import jwt from 'jsonwebtoken';

const createToken = (data: object) => {
  const token = jwt.sign({ data }, String(process.env.JWT_SECRET), {
    expiresIn: '60m',
    algorithm: 'HS256',
  });

  return token;
};

export default {
  createToken,
};