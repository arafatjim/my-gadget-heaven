import React from "react";
import { NavLink } from "react-router-dom";
import arrowIcon from '../../assets/right-arrow.png'
import delta1Img from '../../assets/Gallary/delta1.jpg'
import hstuImg from '../../assets/Gallary/hstu.jpg'
import tejgaoTrophyImg from '../../assets/Gallary/tejGaoTrophy.jpg'
const HomeGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold py-3">Achievements Gallery</h1>
      <div className="grid justify-center w-auto gap-6  px-3 mx-auto md:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-100 w-80  shadow-sm md:w-96 lg:w-96">
        <figure className="w-full h-full">
          <img className="w-full h-full"
            src={delta1Img}
            alt="Shoes"
          />
        </figure>
        
      </div>

      <div className="card bg-base-100 w-80  shadow-sm md:w-96 lg:w-96">
        <figure className="w-full h-full">
          <img className="w-full h-full"
            src={hstuImg}
            alt="Shoes"
          />
        </figure>
        
      </div>

      <div className="card h-full bg-base-100 w-80  shadow-sm md:w-96 lg:w-96">
        <figure className="w-full h-full">
          <img className="w-full h-full"
            src={tejgaoTrophyImg}
            alt="tejgaoTrophyImg"
          />
        </figure>
        
      </div>
      </div>

      <div className=" w-full py-4 mt-4 flex text-center text-white justify-center hover:text-[#40b567] cursor-pointer">
        
          
          <NavLink to="/gallery" className="inline-block font-extrabold group">
                  <p className="bg-[#ffffff] text-black flex  hover:bg-[#9a9a9a] px-4 py-1 whitespace-nowrap rounded">
                    load More
                    <img className="w-6 h-4 my-auto" src={arrowIcon} alt="" />
                  </p>
                </NavLink>
        
      </div>
    </div>
  );
};

export default HomeGallery;
