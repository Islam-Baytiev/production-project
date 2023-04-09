import { lazy } from 'react';

export const ArticlesDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Исскуственная задержка, на реальных проектах так не делать
  setTimeout(() => resolve(import('./ArticlesDetailsPage')), 1500);
}));
