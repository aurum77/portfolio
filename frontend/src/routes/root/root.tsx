import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const Root = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full bg-gruvbox-dark text-gruvbox-foreground">
    { /* need to fix background color not fully filling up in some cases */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
