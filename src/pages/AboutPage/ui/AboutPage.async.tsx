import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Исскуственная задержка, на реальных проектах так не делать
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
