import { createBrowserRouter } from "react-router-dom";
import About from "@pages/About";
import Contacts from "@pages/Contacts";
import Contact from "@pages/Contact";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import Workshop from "@pages/Workshop";
import Furniture from "@pages/Furniture";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/workshop",
    element: <Workshop />,
  },
  {
    path: "/furniture",
    element: <Furniture />,
  },
  // {
  //   path: "/privacy",
  //   element: <Privacy />,
  // },
  // {
  //   path: "/offer",
  //   element: <Offer />,
  // },
  {
    path: "/contacts",
    element: <Contacts />,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
