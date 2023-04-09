import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Исскуственная задержка, на реальных проектах так не делать
  setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
