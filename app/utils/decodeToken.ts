import {jwtDecode} from 'jwt-decode';  // Correct import for jwt-decode
import Cookies from 'js-cookie';
import { User } from '../types/auth.type';  // Ensure this path is correct

export const decodeToken = (): User | null => {
  const token = Cookies.get('accessToken');

  if (!token) {
    console.error('No token found in cookies');
    return null;
  }

  try {
    const decoded = jwtDecode<{ user: User }>(token).user;
    return decoded;
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};
