import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import { useDispatch } from "react-redux";

import AuthLayout from "../layout/AuthLayout";
import UserLayout from "../layout/UserLayout";
import Order from "../layout/Order";

import PublicRoute from "../protectedLayout/PublicRoutes";
import ProtectedRoute from "../protectedLayout/ProtectedRoutes";

import { currentLoggedEmployee } from "../../feature/public/auth/state/authAction";

import Login from "../../feature/public/auth/ui/page/Login";
import Register from "../../feature/public/auth/ui/page/Register";

import Home from "../../feature/public/home/ui/page/Home";
import CarAdd from "../../feature/public/addCar/ui/page/AddCar";

import TermsConditions from "../../feature/public/home/ui/page/TermsConditions";

import SelfDrive from "../../feature/public/selfDriveBooking/ui/page/SelfDrive";
import SelfBooking from "../../feature/public/selfDriveBooking/ui/components/SelfBooking";
import SelfBookingStatus from "../../feature/public/selfDriveBooking/ui/components/selfBookingStatus";
import SelfBookingStatusDetails from "../../feature/public/selfDriveBooking/ui/components/SelfBookingStatusDetails";

import CarWithDrive from "../../feature/public/carWithDrive/ui/page/CarWithDrive";
import DriverBookingForm from "../../feature/public/carWithDrive/ui/components/DriverBookingForm";

import AirportTransfer from "../../feature/public/Airport Transfer/ui/page/AirportTransfer";
import TempoTravellerBus from "../../feature/public/Tempo Traveller & Bus/page/TempoTravellerBus";
import Wedding from "../../feature/public/wedding/ui/page/Wedding";
import About from "../../feature/public/about/ui/page/About";
import PremiumWithCar from "../../feature/public/premiumCarwithDriver/ui/page/PremiumWithCar";
import AirportCarForm from "../../feature/public/Airport Transfer/ui/components/AirportCarForm";
import WeddingBookingPage from "../../feature/public/wedding/ui/page/WeddingBookingPage";
const router = createBrowserRouter([
  // AUTH ROUTES

  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            index: true,
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

  // USER ROUTES

  {
    path: "/home",
    element: <ProtectedRoute />,
    children: [
      {
        element: <UserLayout />,
        children: [
          // Dashboard
          {
            index: true,
            element: <Home />,
          },

          {
            path: "about",
            element: <About />,
          },
          { path: "car-add", element: <CarAdd /> },
          {
            path: "terms-and-condition",
            element: <TermsConditions />,
          },

          // Self Drive
          {
            path: "self-drive",
            element: <SelfDrive />,
          },
          {
            path: "self-booking/:id",
            element: <SelfBooking />,
          },

          // Car With Driver
          {
            path: "car-with-driver",
            element: <CarWithDrive />,
          },
          {
            path: "driver-booking/:id",
            element: <DriverBookingForm />,
          },

          // Premium
          {
            path: "premium-with-car",
            element: <PremiumWithCar />,
          },
          // Airport
          {
            path: "airport",
            element: <AirportTransfer />,
          },
          {
            path: "airportBookingForm",
            element: <AirportCarForm />,
          },

          // Tempo Traveller
          {
            path: "tempo-traveller-bus",
            element: <TempoTravellerBus />,
          },

          // Wedding
          {
            path: "wedding",
            element: <Wedding />,
          },

          {
            path: "weddingBookingPage",
            element: <WeddingBookingPage />,
          },
          // Orders
          {
            path: "order",
            element: <Order />,
            children: [
              {
                index: true,
                element: <SelfBookingStatus />,
              },
              {
                path: "details/:id",
                element: <SelfBookingStatusDetails />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentLoggedEmployee());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
