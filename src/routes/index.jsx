import { lazy } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import PageLoader from "./PageLoader";

const Home = lazy(() => import("../pages/home"));
const Page404 = lazy(() => import("../pages/page404"));

export default function Router() {
  const routes = [
    {
      element: (
        <PageLoader>
          <RootLayout>
            <Outlet />
          </RootLayout>
        </PageLoader>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },

        { path: "/404", element: <Page404 /> },
      ],
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ];

  return useRoutes(routes);
}
