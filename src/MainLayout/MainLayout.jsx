import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Login from "../Components/Longin/Login";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;