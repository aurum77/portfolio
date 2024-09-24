import { createBrowserRouter } from "react-router-dom";
import Root from "./root/root";
import Home from "./home";
import Error from "./error";
import About from "./about";
import Blog from "./blog";
import Projects from "./projects";
import Post, { postLoader } from "./post";

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
        path: "/blog/:postId",
        element: <Post />,
        loader: postLoader
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
