import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // Исскуственная задержка, на реальных проектах так не делать
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
