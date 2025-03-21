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
import Messages from "./Pages/Messages/Messages.tsx";
import HostWelcome from "./Pages/HostWelcome/HostWelcome.tsx";
import HostDetails from "./Pages/HostDetails/HostDetails.tsx";
import EditUserProfile from "./Pages/EditUserProfile/EditUserProfile.tsx";
import ProtectedRoute from "./Layout/ProtectedRoute.tsx";

const App = () => {

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
          path: "/properties",
          element: <PropertyList />,
        },
        {
          path: "/property-details/:id",
          element: <PropertyDetails />,
        },
        {
          path: "/confirm-booking/:id",
          element: <ConfirmBooking />,
        },
        {
          path: "/wishlists",
          element: <ProtectedRoute><Wishlists /></ProtectedRoute>,
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
        {
          path: "/user/:id",
          element: <HostDetails />,
        },
        {
          path: "/user/edit/:id",
          element: <EditUserProfile />,
        },
        // {
        //   path: "/become-host",
        //   element: <HostWelcome />,
        // },
        {
          path: "/messages",
          element: <Messages />,
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