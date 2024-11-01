import jwt from 'jsonwebtoken';
import { User } from '../types/auth.type';


const SECRET_KEY = process.env.JWT_SECRET_KEY || 'd6727o8ukxlfa1e7d4b877l9mp';

export const generateToken = (user:User): string => {
  const token = jwt.sign(
    { user },
    SECRET_KEY,
    { expiresIn: '1d' }
  );
  return token
};
