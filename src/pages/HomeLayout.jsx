import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeLayout() {
  return (
    <div  className="">
        <Navbar />
      <main className="mx-10 mt-10 ">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
