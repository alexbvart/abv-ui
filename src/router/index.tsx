import { useRoutes } from 'react-router-dom';
import { AppsRoutes } from './AppsRoutes';

export const AppRoutes = () => {
  return useRoutes([AppsRoutes]);
}; 
