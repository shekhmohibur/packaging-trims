import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Quality from "../pages/Quality";
import Gallery from "../pages/Gallery";
import Faq from "../pages/Faq";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "about",
        Component: About,
      },
      {
        path: "quality",
        Component: Quality,
      },
      {
        path: "gallery",
        Component: Gallery,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "faq",
        Component: Faq,
      },
      {
        path: "products/:slug",
        Component: ProductPage,
      },

      {
        Component: PublicRoute,
        children: [
          {
            path: "login",
            Component: Login,
          },
          {
            path: "register",
            Component: Register,
          },
        ],
      },

      {
        Component: PrivateRoute,
        children: [
          {
            path: "dashboard",
            Component: Dashboard,
          },
        ],
      },
    ],
  },
]);

export default Router;
