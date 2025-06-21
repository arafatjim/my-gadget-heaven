import { React } from "react";
import { NavLink } from "react-router-dom";
import heartImg from "../../assets/love.png";
const NavBar = () => {
  const navItems = (
    <>
      <button className="text-xl font-semibold text-start text-[#200] lg:text-[#fff] hover:text-[#242265]  ">
        <NavLink to="/home" className={({isActive})=>isActive? 'text-primary': 'text-white'}>Home</NavLink>
      </button>
      <button className="text-xl font-semibold text-start text-[#200] lg:text-[#fff] hover:text-[#242265] ">
        <NavLink to="/statistics" className={({isActive})=>isActive? 'text-primary': 'text-white'}>Statistics</NavLink>
      </button>
      <button className="text-xl font-semibold text-start text-[#200] lg:text-[#fff] hover:text-[#242265]  ">
        <NavLink to="/dashboard" className={({isActive})=>isActive? 'text-primary': 'text-white'}>Dashboard</NavLink>
      </button>
    </>
  );
  return (
    <div className="w-[98%] px-4 mx-auto shadow-sm flex justify-center py-2 bg-[#b20bf9]">
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
            className="menu menu-sm dropdown-content bg-[#0c353f] rounded-box z-1 w-52 shadow py-3"
          >
            {navItems}
          </ul>
        </div>
        <div className="text-4xl font-extrabold normal-case">
                 <span className="text-[#ffffff]">Iinfy</span>
                 <span className="text-[#0ed958]">Tech</span>
             </div>
      </div>

      {/* nav center */}
      <div className="nav-center  py-6 sm:hidden  lg:flex">
        <ul className="sr-only sm:not-sr-only lg:grid justify-around gap-4 grid-cols-3 ">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end flex gap-2  py-4">
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="indicator">
                  <span className="badge badge-sm indicator-item ">8</span>

  <img
            className="btn btn-ghost btn-circle w-10 h-10 rounded-full p-2"
            alt="Tailwind CSS Navbar component"
            src={heartImg}
          />
</div>


      </div>
    </div>
  );
};

export default NavBar;
