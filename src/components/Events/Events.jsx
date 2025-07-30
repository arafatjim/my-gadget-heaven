import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import contestIcon from "../../assets/Icons/programmingContest.png";
import techTalkIcon from "../../assets/Icons/techTalks.png";
import workShopIcon from "../../assets/Icons/workshop.png";
const Events = () => {
  return (
    <section className="bg-[#1f1f1f] text-[#F1F5F9] mt-20 py-4 px-4 text-center font-electrolize">
      <h2 className="text-4xl font-bold">Our Upcoming Events</h2>

      <p className="max-w-2xl mx-auto mt-6 text-base">
        Delta IT Club is a student-led tech community at Delta Computer Science
        College. We aim to empower students with hands-on experience in
        programming, software development, AI, cybersecurity, and much more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 ">
        <div className="bg-[#2f2f2f] p-3 flex items-center gap-4 rounded-xl shadow  hover:bg-white/20 transition">
          <img
            className="w-12 h-12 p-1 rounded-lg bg-[#b8b4b4]"
            src={contestIcon}
            alt=""
          />
          <div className="grid justify-start text-left gap-1">
            <h3 className="text-xl font-semibold mb-1">Programming Contests</h3>
            <p className="text-sm text-gray-400">
              Sharpen your coding skills with regular competitive events.
            </p>
          </div>
        </div>
        <div className="bg-[#2f2f2f] p-3 flex items-center gap-4 rounded-xl shadow hover:bg-white/20 transition">
          <img
            className="w-12 h-12 p-1 rounded-lg bg-[#b8b4b4]"
            src={techTalkIcon}
            alt=""
          />
          <div className="grid justify-start text-left gap-1">
            <h3 className="text-xl font-semibold mb-1">
              Tech Talks & Seminars
            </h3>
            <p className="text-sm text-gray-400">
              Learn from industry experts and senior developers.
            </p>
          </div>
        </div>

        <div className="bg-[#2f2f2f] p-3 flex items-center gap-4 rounded-xl shadow hover:bg-white/20 transition">
          <img
            className="w-12 h-12 p-1 rounded-lg bg-[#b8b4b4]"
            src={workShopIcon}
            alt=""
          />
          <div className="grid justify-start text-left gap-1">
            <h3 className="text-xl font-semibold mb-1">
              Workshops & Hackathons
            </h3>
            <p className="text-sm text-gray-400">
              Build real-world projects in collaborative sessions.
            </p>
          </div>
        </div>
      </div>

      {/* <NavLink to="/registration" className="inline-block font-extrabold group py-4">
              <button className="bg-[#ffffff] text-black  hover:bg-[#9a9a9a] px-4 py-1 whitespace-nowrap rounded">
                Join club
              </button>
            </NavLink> */}
    </section>
  );
};

export default Events;
