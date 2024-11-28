import { lazy } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import PageLoader from "./PageLoader";

const Home = lazy(() => import("../pages/home"));
const CookieAndPricavy = lazy(() => import("../pages/cookiAndPrivacy"));
const PrivacyPolicy = lazy(() => import("../pages/privacyPolicy"));
const AboutUs = lazy(() => import("../pages/aboutUs"));
const ContactUs = lazy(() => import("../pages/contactUs"));
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
        {
          path: "/cookie-policy",
          element: <CookieAndPricavy />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
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
