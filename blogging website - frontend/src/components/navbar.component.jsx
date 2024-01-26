import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../imgs/logo (1).png";

const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <>
    <nav className="navbar">
      <Link to="/" className="flex-none w-10">
        <img src={logo} className="w-full" />
      </Link>

      <div
        className={
          "absolute left-0 w-full mt-0.5 bg-white top-full border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
          (searchBoxVisibility ? "show" : "hide")
        }
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full p-4 pl-6 md:w-auto bg-grey pr-[12%]
                md:pr-4 rounded-full placeholder:text-dark-grey md:pl-12"
        />

        <i className="absolute fi fi-rr-search right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
      </div>

      <div className="flex items-center gap-3 ml-auto md:gap-6">
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full md:hidden bg-grey"
          onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
        >
          <i className="text-xl fi fi-rr-search "></i>
        </button>

        <Link to="/editor" className="hidden gap-2 md:flex link">
          <i className="fi fi-rr-edit"></i>
          <p>Write</p>
        </Link>

        <Link className="py-2 btn-dark" to="/signin">
          Sign In
        </Link>
        <Link className="hidden py-2 btn-light md:block" to="/signup">
          Sign Up
        </Link>
      </div>
    </nav>

    <Outlet />

    </>
  )
}

export default Navbar;
