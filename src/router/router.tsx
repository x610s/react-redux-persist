import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Other } from "../pages/Other";
import { Layout } from "../Navbar";
import { ProtectedLogin, ProtectedRoute } from "./guards/RouteGuards";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute children={<Layout/>} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/other",
        element: <Other />,
      },
    ],
  },
  {
    path: "login",
    element:  <ProtectedLogin children={<Login />}  />
  },
]);


