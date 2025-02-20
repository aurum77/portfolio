import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import "../../index.css";

export const Route = createRootRoute({
  component: () => {
    {
      return (
        <div className="flex flex-col items-center min-h-screen w-full bg-theme-bg text-theme-text">
          <header className="w-full max-w-3xl p-4">
            <nav className="flex flex-row justify-center items-center w-full">
              <Link
                className="font-serif font-bold hover:underline underline-offset-4"
                to="/"
              >
                Kurabiye
              </Link>
              <ul className="flex gap-6 ml-auto">
                <li>
                  <Link
                    className="font-serif font-bold hover:underline underline-offset-4"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-serif font-bold hover:underline underline-offset-4"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <Outlet />
        </div>
      );
    }
  },
});
