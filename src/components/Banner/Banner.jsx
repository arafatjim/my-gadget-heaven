import React from "react";
import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/banner.png";
import arrowBtnImg from "../../assets/right-arrow.png";
const Banner = () => {
  return (
    
    <div className="hero bg-[#1f1f1f] min-h-96 items-center mx-auto justify-center mt-26 mb-8">
      <div className="hero-content grid lg:grid-cols-2 gap-8 text-center">
        <div className="text-center lg:text-left">
          <h1 className=" "> 
            <span className=" text-xl lg:text-4xl">Welcome to</span>
             <br /> <span className="font-extrabold text-5xl">DELTA IT CLUB!</span></h1>
         
           <div className="flex justify-center gap-4 lg:justify-start mt-6 rotate-0">
            <NavLink to="/registration" className="inline-block font-extrabold group">
                    <button className="bg-[#ffffff] text-black  hover:bg-[#9a9a9a] px-4 py-1 whitespace-nowrap rounded">
                      Join club
                    </button>
                  </NavLink>
          <NavLink to="/activities" className="inline-block  font-extrabold group">
                  <button className="bg-[#ffffff] text-black flex gap-2  hover:bg-[#9a9a9a] px-4 py-1 whitespace-nowrap rounded">
                    Explore More
                    <img className="w-6 h-3 my-auto" src={arrowBtnImg} alt="" />
                  </button>
                </NavLink>
           </div>
          {/*<Link
            to="/about"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <button className="btn relative bg-[#0669c1e4] text-[#fff] hover:bg-[#04dd50]">
              About Us
            </button>
          </Link> */}
        </div>
        <div className="card bg-none w-full max-w-xl  items-center justify-center ">
          <div className="card-body items-center text-center  justify-center">
            <img className="rotate-2 shadow-xl shadow-[#616161]" src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
