
import { Link } from "react-router-dom";

import NavLinks from "./Navlinks";
import { useState, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";


const themes = {
  dark: "dark",
  light: "light",
};

function Navbar() {
 
  const [theme, setTheme] = useState(darkModeLocalstorage());

 

  function darkModeLocalstorage() {
    return localStorage.getItem("mode") || themes.light;
  }

  const handleClick = () => {
    const newTheme = theme == themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    localStorage.setItem("mode", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-base-300 px-7">
      <div className="navbar align-element">
        <div className="navbar-start">
          <Link to="/" className="btn btn-primary btn-lg ">
            C
          </Link>
          <div tabIndex={0} role="button" className="dropdown  lg:hidden">
            <button className="btn btn-primary lg:btn-lg ">c</button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 mt-3 rounded-box w-64"
            >
              <NavLinks />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end">
  
       

          <div className="flex justify-end items-center ml-5">
          <label className="swap swap-rotate">
            <input
           
              onClick={handleClick}
              type="checkbox"
              defaultChecked={theme == "dark" ? false : true}
            />

            <IoSunnyOutline className="swap-off fill-current w-8 h-8" />

            <IoMoonOutline className="swap-on fill-current w-8 h-8" />
          </label>
        </div>

        <div className="flex-none  ml-7">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm bg-red-300  indicator-item"></span>
        </div>
      </div>
  
    </div>
  </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
