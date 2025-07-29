import { React } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navItems = (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
      >
        Home
      </NavLink>
      
        <NavLink
          to="/about"
          className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
        >
          About
        </NavLink>
      
      
        <NavLink
          to="/events"
          className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
        >
          Events
        </NavLink>
      
      
     
        <NavLink
          to="/activities"
          className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
        >
          Activities
        </NavLink>

        <NavLink
          to="/gallary"
          className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
        >
          Gallary
        </NavLink>

        <NavLink
          to="/executives"
          className={({ isActive }) =>
          `text-lg font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
        >
          Executives
        </NavLink>

        <NavLink
          to="/contacts"
          className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
        >
          Contacts
        </NavLink>

        <NavLink
          to="/registration"
          className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
        >
          <button className="btn btn-wide w-full bg-[#cbcbcce4] font-bold  text-[#000] hover:bg-[#707371]">
              Join Us
            </button>
        </NavLink>
      
    </div>
  );
  return (
    <div className="w-full px-4 mx-auto shadow-xl text-black flex justify-center py-2 bg-[#e9ecef]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content font-semibold bg-[#e9ecef] rounded-box z-1 w-52 shadow py-3 backdrop-blur-3xl"
          >
            {navItems}
          </ul>
        </div>
        <div className="font-extrabold normal-case sm:text-xl md:text-2xl lg:text-2xl">
          <span className="text-[#111111]">Delta IT Club</span>
          
        </div>
      </div>

      

      <div className="navbar-end flex gap-3  px-2 mx-auto sm:hidden md:flex  lg:flex">
        
        <div className="nav-end  sm:hidden md:flex  lg:flex justify-center items-center">
        <ul className="sr-only sm:not-sr-only  lg:grid justify-around items-center gap-6 grid-cols-8 ">
          {navItems}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
