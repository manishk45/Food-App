import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../Components/Signup";
import PrivateRouter from "../layout/PrivateRouter/PrivateRouter";
import UpadateProfile from "../pages/dashboard/UpadateProfile";
import CartPage from "../pages/shop/CartPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: (
          <PrivateRouter>
            <Menu />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: <UpadateProfile />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
