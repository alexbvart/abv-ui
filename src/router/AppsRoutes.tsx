import { RouteObject } from "react-router-dom";
import { AppsMainLayout } from "../common/components/AppsLayout";
import { routesAirbnb } from "./subroutes/routesAirbnb";
import { routesTask } from "./subroutes/routesTask";
import { routesMoto } from "./subroutes/routesMoto";

export const AppsRoutes: RouteObject = {
  path: '/apps',
  element: <AppsMainLayout />,
  children: [
    // { index: true, path: 'inicio', element: <Home /> },
    {
      path: 'airbnb',
      children: routesAirbnb,
    },
    {
      path: 'task',
      children: routesTask,
    },
    {
      path: 'moto',
      children: routesMoto
    }

  ],
};

// export const PageErrorRoute: RouteObject = {
//   path: '*',
//   element: <PageError path="/home" />,
// };
