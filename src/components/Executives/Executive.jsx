import React from "react";
import { Helmet } from 'react-helmet-async';
import { NavLink } from "react-router-dom";
const Executive = () => {
  return (
     <section className="bg-[#2f2f2f] mt-30 mb-8 text-white p-10 rounded-2xl shadow-xl">
      <Helmet>
        <title>Exclusive | Delta IT Club</title>
      </Helmet>

      <h2 className="text-4xl font-bold mb-6 text-center">Exclusive at DELTA IT CLUB</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white/10 p-6 rounded-xl text-center hover:bg-white/20 transition">
          <h3 className="text-2xl font-semibold mb-2">Premium Workshops</h3>
          <p>
            Get exclusive access to advanced workshops on AI, Cybersecurity,
            DevOps & more.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white/10 p-6 rounded-xl text-center hover:bg-white/20 transition">
          <h3 className="text-2xl font-semibold mb-2">Member-Only Events</h3>
          <p>
            Participate in internal coding contests, meetups, and collaboration
            projects.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white/10 p-6 rounded-xl text-center hover:bg-white/20 transition">
          <h3 className="text-2xl font-semibold mb-2">Project Incubation</h3>
          <p>
            Work on real-life tech projects mentored by seniors and professionals.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <NavLink to="/registration" className="inline-block font-extrabold group">
        <button className="bg-[#ffffff] text-black  hover:bg-[#9a9a9a] px-4 py-1 whitespace-nowrap rounded">
          Join club
        </button>
      </NavLink>
      </div>
    </section>
  );
};

export default Executive;
