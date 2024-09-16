import { createBrowserRouter } from "react-router-dom";
import Root from "./root/root";
import Home from "./home/home";
import Error from "./error/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
