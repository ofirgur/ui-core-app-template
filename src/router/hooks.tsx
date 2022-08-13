import { useLocation } from 'react-router-dom';
import { findRoute } from './routes';

export const useCurrentRoute = () => {
  const location = useLocation();
  return findRoute(location.pathname);
};
