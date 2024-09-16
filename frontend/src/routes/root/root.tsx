import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const root = () => {
  return (
    <>
      <Header />
      <div>Name Surname</div>
      <Outlet />
      <Footer />
    </>
  );
};

export default root;
