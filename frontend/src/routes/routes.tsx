import { createBrowserRouter } from "react-router-dom";
import Root from "./root/root";
import Home from "./home";
import Error from "./error";

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
