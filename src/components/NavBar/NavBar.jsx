import { React } from "react";
import { NavLink } from "react-router-dom";
import clubLogo from '../../assets/clubLogo.jpg'
const NavBar = () => {
  const navItems = (
    <div className="flex flex-col text-white font-extrabold sm:flex-row md:flex-row lg:flex-row gap-4 ">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#fff]"
          } `
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#fff]"
          } `
        }
      >
        About
      </NavLink>

      <NavLink
        to="/events"
        className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#fff]"
          } `
        }
      >
        Events
      </NavLink>

      <NavLink
        to="/activities"
        className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#fff]"
          } `
        }
      >
        Activities
      </NavLink>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#fff]"
          } `
        }
      >
        Gallary
      </NavLink>

      <NavLink
        to="/executives"
        className={({ isActive }) =>
          `text-lg font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#fff]"
          } `
        }
      >
        Executives
      </NavLink>

      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#fff]"
          } `
        }
      >
        Contacts
      </NavLink>

      <NavLink to="/registration" className="inline-block font-extrabold group">
        <button className="bg-[#ffffff] text-black  hover:bg-[#9a9a9a] px-4 py-1 whitespace-nowrap rounded">
          Join club
        </button>
      </NavLink>
    </div>
  );
  return (
    <div className="w-full px-4 mx-auto text-white shadow-xl  flex justify-center py-4  bg-[#1f1f1f] fixed z-10 top-0 left-0 right-0">
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
            className="menu menu-sm dropdown-content font-semibold bg-[#3e4449] rounded-box z-1 w-52 shadow py-3 backdrop-blur-3xl"
          >
            {navItems}
          </ul>
        </div>
        <div className="font-extrabold normal-case text-2xl inline-block lg:text-4xl">
             <section className="flex gap-2 items-center justify-center flex-nowrap">
  <img className="w-14 h-10 rounded-xl ml-4" src={clubLogo} alt="" />
  <p className="text-lg lg:text-4xl whitespace-nowrap">DELTA IT CLUB</p>
</section>
        </div>
      </div>

      <div className="navbar-end flex gap-3  px-12 mx-auto sm:hidden md:flex  lg:flex ">
        <div className="nav-end  sm:hidden md:flex  lg:flex justify-center items-center ">
          <ul className="sr-only sm:not-sr-only  lg:grid justify-around items-center gap-6 grid-cols-8 ">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
