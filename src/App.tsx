import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout.tsx";
import Home from "./Pages/Home/Home.tsx";
import PropertyList from "./Pages/PropertyList/PropertyList.tsx";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails.tsx";
import ConfirmBooking from "./Pages/ConfirmBooking/ConfirmBooking.tsx";
import Wishlists from "./Pages/Wishlists/Wishlists.tsx";
import MyTrips from "./Pages/MyTrips/MyTrips.tsx";
import AddProperty from "./Pages/AddProperty/AddProperty.tsx";
import MyProperties from "./Pages/MyProperties/MyProperties.tsx";
import MyDrafts from "./Pages/MyDrafts/MyDrafts.tsx";
import AccountSettings from "./Pages/AccountSettings/AccountSettings.tsx";
import Notifications from "./Pages/Notifications/Notifications.tsx";
import { ToastContainer } from 'react-toastify';
import { useGetUserQuery } from "./services/apiSlice.ts";
import { useEffect } from "react";

const App = () => {
  const token = localStorage.getItem('token');
  const { data: getUser, isLoading } = useGetUserQuery(token);

  console.log(getUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Layout />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/property-list",
          element: <PropertyList />,
        },
        {
          path: "/property-details/:id",
          element: <PropertyDetails />,
        },
        {
          path: "/confirm-booking",
          element: <ConfirmBooking />,
        },
        {
          path: "/wishlists",
          element: <Wishlists />,
        },
        {
          path: "/my-trips",
          element: <MyTrips />,
        },
        {
          path: "/add-property",
          element: <AddProperty />,
        },
        {
          path: "/my-properties",
          element: <MyProperties />,
        },
        {
          path: "/my-drafts",
          element: <MyDrafts />,
        },
        {
          path: "/account-settings",
          element: <AccountSettings />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
      ]
    }
  ])
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App