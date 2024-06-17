import { RouteObject } from "react-router-dom";
import { AppsMainLayout } from "../common/components/AppsLayout";
import { routesAirbnb } from "./subroutes/routesAirbnb";
import { routesTask } from "./subroutes/routesTask";

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

  ],
};

// export const PageErrorRoute: RouteObject = {
//   path: '*',
//   element: <PageError path="/home" />,
// };
