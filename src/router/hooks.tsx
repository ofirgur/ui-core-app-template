import { useLocation } from 'react-router-dom';
import routes from './routes';

export const useCurrentRoute = () => {
  const location = useLocation();
  return Object.values(routes).find(
    (route) => route.pathname === location.pathname
  );
};
