import React from "react";
import Mission from "../Mission/Mission";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div className="h-auto bg-[#232323] text-white  shadow-xl mt-20 items-center justify-center py-4 px-3 dark:bg-[#18191a]  dark:text-[#e9ecef] p-10">
      <Helmet>
        <title>DeltaITClub | About</title>
      </Helmet>
      <h1 className="about-us text-center text-[40px] font-extrabold py-4 ">
        About Our Club
      </h1>
      <p className="about-us sm:text-sm lg:text-xl text-center  mt-10 mb-8">
        Delta IT Club is the official community platform for tech enthusiast
        students of Delta Computer Science College, Rangpur. Our club brings
        together passionate individuals who aim to develop their skills,
        collaborate on innovative ideas, and gain practical experience. We
        regularly organize tech talks, problem solving sessions, programming
        contests, hackathons, workshops & seminars, and other IT-based events to
        enhance academic and professional growth among DCSC students.
      </p>
      <Mission></Mission>
      
    </div>
  );
};

export default About;
