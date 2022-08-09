import routes from 'router/routes';

export const LIST_ITEMS = Object.values(routes).filter(
  (l) => l.pathname !== routes.notFound.pathname
);