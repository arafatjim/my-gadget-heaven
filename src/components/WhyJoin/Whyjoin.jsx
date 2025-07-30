import React from "react";
import wrenchImg from "../../assets/Icons/wrench.png";
import brainIcon from "../../assets/Icons/brain.png";
import trophyIcon from "../../assets/Icons/trophy.png";
import teamIcon from "../../assets/Icons/team.png";

import { NavLink } from "react-router-dom";
const Whyjoin = () => {
  return (
    
    <div className="text-center mt-20 mb-8 bg-[#1f1f1f] gap-3  shadow-lg p-2 dark:text-white ">
      <h1 className="text-[40px] font-extrabold py-3">Why join DELTA IT CLUB?</h1>
      <div className="flex text-center justify-around items-center ">
        
        
      </div>
       <div className="grid justify-center gap-4 items-center mx-auto lg:grid-cols-2"> 
        <div className="card bg-[#1f1f1f] w-auto text-white card-lg shadow-sm flex flex-col justify-start  h-full p-2">
          <p className="py-4 text-[20px]">If you want to -</p>
          <ul className="  text-start">
            
            <li className="flex items-center gap-6 mb-4 bg-[#2f2f2f] border-2 border-[#515151] p-3 rounded-lg hover:bg-white/20 transition">
              <img className="w-12 h-12 bg-[#5c5b5b] p-2 rounded-sm" src={wrenchImg} alt="" />
              <div>
                <span className="font-bold">Learn Professional Skills</span>
               <p>Gain insights from mentors and alumni.</p>
              </div>
            </li>
            <li className="flex items-center gap-6 mb-4 bg-[#2f2f2f] border-2 border-[#515151] p-3 rounded-lg hover:bg-white/20 transition">
              <img className="w-12 h-12 bg-[#5c5b5b] p-2 rounded-sm" src={teamIcon} alt="" />
              <div>
                <span className="font-bold">Enhance Teamwork Abilities</span>
               <p>Build and grow ideas with your team.</p>
              </div>
            </li>

            <li className="flex items-center gap-6 mb-4 bg-[#2f2f2f] border-2 border-[#515151] p-3 rounded-lg hover:bg-white/20 transition">
              <img className="w-12 h-12 bg-[#5c5b5b] p-2 rounded-sm" src={brainIcon} alt="" />
              <div>
                <span className="font-bold">Sharpen Your Mind</span>
               <p>Solve problems and boost analytical thinking.</p>
              </div>
            </li>

            <li className="flex items-center gap-6 mb-4 bg-[#2f2f2f] border-2 border-[#515151] p-3 rounded-lg hover:bg-white/20 transition">
              <img className="w-12 h-12 bg-[#5c5b5b] p-2 rounded-sm" src={trophyIcon} alt="" />
              <div>
                <span className="font-bold">Win Tech Competitions</span>
               <p>Get guidelines & resources to dominate contests.</p>
              </div>
            </li>

            
          </ul>
        </div>
        <div className="card gap-3 w-auto bg-[#1f1f1f] text-white card-lg shadow-sm flex flex-col justify-center h-full ">
          {/* jdhh? */}
          <p className="py-2 text-[20px]">We have</p>
          <div className="">
            <ul className="justify-start text-start grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
            
            <li className="flex items-center justify-center gap-6 mb-4 bg-[#2f2f2f] border-2 border-[#515151] p-2 rounded-lg hover:bg-white/20 transition">
              <div className="shadow w-full text-center">
  <div className="text-center justify-center items-center p-4">
    <div className="stat-value text-5xl py-2 px-5 w-28 rounded-xl mx-auto bg-[#484848]">55</div>
    <div className="text-[20px] py-1">Active Members</div>
  </div>
</div>
            </li>
            <li className="flex items-center gap-6 mb-4 bg-[#2f2f2f] border-2 border-[#515151] p-2 rounded-lg hover:bg-white/20 transition">
              <div className="shadow w-full text-center">
  <div className="text-center justify-center items-center p-4">
    <div className="stat-value text-5xl py-2 px-5 w-28 rounded-xl mx-auto bg-[#484848]">10</div>
    <div className="text-[20px] py-2">Mentors</div>
  </div>
</div>
            </li>

            <li className="flex items-center gap-6 mb-4 bg-[#2f2f2f] border-2 border-[#515151] p-2 rounded-lg hover:bg-white/20 transition">
               <div className="shadow w-full text-center">
  <div className="text-center justify-center items-center p-4">
    <div className="stat-value text-5xl py-2 px-5 w-28 rounded-xl mx-auto bg-[#484848]">150</div>
    <div className="text-[20px] py-2">Alumni</div>
  </div>
</div>
            </li>

            <li className="flex items-center gap-6 mb-4 bg-[#2f2f2f] border-2 border-[#515151] p-2 rounded-lg hover:bg-white/20 transition">
              <div className="shadow w-full text-center">
  <div className="text-center justify-center items-center p-4">
    <div className="stat-value text-5xl py-2 px-5 w-28 rounded-xl mx-auto bg-[#484848]">3</div>
    <div className="text-[20px] py-2">Events</div>
  </div>
</div>
            </li>

            
          </ul>
          </div>
          
          

        </div>
        
       </div> 

      {/* <div className="text-center my-4">
        <NavLink
          to="/registration"
          className={({ isActive }) =>
          `text-lg  font-bold text-start justify-center items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
        >
          <a className=" w-full bg-[#f0f4f8] justify-center border-2 border-[#2e4358] hover:bg-[#707371]">Register Now</a>
        </NavLink>
      </div> */}
      
    </div>
    
  );
};

export default Whyjoin;
