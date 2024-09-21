import { createBrowserRouter } from "react-router-dom";
import Root from "./root/root";
import Home from "./home";
import Error from "./error";
import About from "./about";
import Blog from "./blog";
import Projects from "./projects";

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
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
