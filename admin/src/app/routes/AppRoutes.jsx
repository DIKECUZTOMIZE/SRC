import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../../feature/public/auth/ui/page/Login";
import Register from "../../feature/public/auth/ui/page/Register";
import PublicRoute from "../protectedLayout/PublicRoutes";
import ProtectedRoute from "../protectedLayout/ProtectedRoutes";
import { currentLoggedEmployee } from "../../feature/public/auth/state/authAction";
import { useDispatch } from "react-redux";
import UserLayout from "../layout/UserLayout";

import Dashboard from "../../feature/private/dashboard/ui/page/Dashboard";
import Filter from "../../feature/private/dashboard/ui/page/Filter";
import User from "../../feature/private/dashboard/ui/page/User";

import UpdateCar from "../../feature/private/dashboard/ui/page/UpdateCar";
import BookingHistory from "../../feature/private/dashboard/ui/page/BookingHistory";
import CarDetails from "../../feature/private/dashboard/ui/page/CarDetails";

import Settings from "../../feature/private/dashboard/ui/page/ProfileSetting";

import BookingList from "../../feature/public/SelfDriveBooking/ui/page/BookingList";
import BookingDetails from "../../feature/public/SelfDriveBooking/ui/page/BookingDetails";

import AddCar from "../../feature/public/addCar/ui/page/AddCar";
import CarList from "../../feature/public/carList/ui/page/CarList";
import CategoryCarList from "../../feature/public/carList/ui/page/categoryCarList";
import CarCategoryListDetails from "../../feature/public/carList/ui/page/carCategoryListDetais";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentLoggedEmployee());
    })();
  }, [dispatch]);

  let router = createBrowserRouter([
    // auth
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    // User Routes
    {
      path: "/dashboard",
      element: <ProtectedRoute />,
      children: [
        {
          element: <UserLayout />,
          children: [
            { index: true, element: <Dashboard /> },

            { path: "profile", element: <User /> },

            { path: "cars", element: <CarList /> },

            // Category route
            {
              path: "cars/category/:category",
              element: <CategoryCarList />,
            },

            // Details page
            {
              path: "cars/details/:id",
              element: <CarCategoryListDetails />,
            },

            // Add Car
            {
              path: "cars/add",
              element: <AddCar />,
            },

            // UPDATE SAME FORM
            {
              path: "cars/:id/edit",
              element: <AddCar />,
            },

            {
              path: "filter",
              element: <Filter />,
            },

            {
              path: "bookings",
              element: <BookingList />,
            },

            {
              path: "booking-details/:id",
              element: <BookingDetails />,
            },

            {
              path: "bookings/history",
              element: <BookingHistory />,
            },

            {
              path: "settings",
              element: <Settings />,
            },
          ],
        },
      ],
    },
    //
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
