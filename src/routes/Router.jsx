import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
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
