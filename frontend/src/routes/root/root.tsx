import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const Root = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gruvbox-dark text-gruvbox-foreground">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
