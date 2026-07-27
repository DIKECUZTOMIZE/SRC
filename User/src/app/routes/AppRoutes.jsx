import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../../feature/public/auth/ui/page/Login";
import Register from "../../feature/public/auth/ui/page/Register";
import Home from "../../feature/public/home/ui/page/Home";
import PublicRoute from "../protectedLayout/PublicRoutes";
import ProtectedRoute from "../protectedLayout/ProtectedRoutes";
import { currentLoggedEmployee } from "../../feature/public/auth/state/authAction";
import { useDispatch } from "react-redux";
import UserLayout from "../layout/UserLayout";
import About from "../../feature/public/home/ui/page/About";
import TermsConditions from "../../feature/public/home/ui/page/TermsConditions";
import SelfBooking from "../../feature/public/selfDriveBooking/ui/components/SelfBooking";
import SelfBookingStatus from "../../feature/public/selfDriveBooking/ui/components/selfBookingStatus";
import Order from "../layout/Order";
import SelfBookingStatusDetails from "../../feature/public/selfDriveBooking/ui/components/SelfBookingStatusDetails";
import SelfDrive from "../../feature/public/selfDriveBooking/ui/page/SelfDrive";
import CarWithDrive from "../../feature/public/carWithDrive/ui/page/CarWithDrive";
import AirportTransfer from "../../feature/public/Airport Transfer/ui/page/AirportTransfer";
import TempoTravellerBus from "../../feature/public/Tempo Traveller & Bus/page/TempoTravellerBus";
import GoodsCarrier from "../../feature/public/goodsCarrier/page/GoodsCarrier";
import Wedding from "../../feature/public/wedding/ui/page/Wedding";
import DriverBookingForm from "../../feature/public/carWithDrive/ui/components/DriverBookingForm";
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

    // user
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <UserLayout />,
          children: [
            // Menu
            {
              path: "",
              element: <Home />,
            },

            {
              path: "order",
              element: <Order />,
              children: [
                {
                  path: "",
                  element: <SelfBookingStatus />,
                },
                {
                  path: "my-booking-status-details/:id",
                  element: <SelfBookingStatusDetails />,
                },
              ],
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "termsAndCondition",
              element: <TermsConditions />,
            },
            // Menu

            // main components
            {
              path: "self-drive",
              element: <SelfDrive />,
            },
            {
              path: "selfBooking/:id",
              element: <SelfBooking />,
            },

            // car with drive
            {
              path: "car-with-drive",
              element: <CarWithDrive />,
            },
            {
              path: "driveBookingForm",
              element: <DriverBookingForm />,
            },
            // car with drive

            {
              path: "airport",
              element: <AirportTransfer />,
            },
            {
              path: "tempo-traveller-bus",
              element: <TempoTravellerBus />,
            },
            {
              path: "goods-carrier",
              element: <GoodsCarrier />,
            },

            {
              path: "wedding",
              element: <Wedding />,
            },
            // main components
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
