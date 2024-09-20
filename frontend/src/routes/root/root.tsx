import { Outlet } from "react-router-dom";
import Header from "./components/header";

const Root = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gruvbox-dark text-gruvbox-foreground">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
