import React from "react";
import { NavLink } from "react-router-dom";
const Whyjoin = () => {
  return (
    <div className="text-center p-2 my-10 bg-[#f0f4f8] shadow-lg">
      <h1 className="text-4xl font-extrabold my-4">Why join Delta IT Club?</h1>

      <div className="bg-[#e9ecef] shadow-lg p-4 my-6 grid justify-center gap-4 items-center mx-auto lg:grid-cols-2">
        <div className="card w-auto bg-base-100 card-lg shadow-sm flex flex-col justify-start  h-full p-2">
          <ul className="list-disc ml-4">
            <li>
              
              <span className="font-bold">Learn by Doing:</span> Gain hands-on
              experience in competitive programming, web and software
              development, UI/UX, AI, ML, and more
            </li>
            <li>
              
              <span className="font-bold">Tech Community:</span> Connect with
              passionate peers, skilled seniors, and mentors to grow together.
            </li>
            <li>
              
              <span className="font-bold">Contests & Events:</span> Take part in
              coding contests, hackathons, tech quizzes, and fun challenges.
            </li>
            <li>
              
              <span className="font-bold">Work on Real Projects:</span> Build
              innovative projects, publish blogs, and contribute to research
              initiatives.
            </li>
            <li>
              
              <span className="font-bold">Industry Exposure:</span> Attend
              seminars, workshops, and company visits to explore real IT
              careers.
            </li>
            <li>
              
              <span className="font-bold">Boost Your CV:</span> Showcase your
              skills, leadership, and teamwork through club activities and
              roles.
            </li>
            <li>
              
              <span className="font-bold">Make a Difference:</span> Lead IT
              awareness campaigns and help train rural students in basic
              computing.
            </li>
          </ul>
        </div>
        <div className="card gap-3 w-auto bg-base-100 card-lg shadow-sm flex flex-col justify-center h-full p-2">
          <h1 className="text-4xl text-center font-extrabold">We have</h1>

          <div className=" shadow gap-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="stat place-items-center rounded-xl bg-[#f0f4f8]">
              {/* <div className="stat-title text-xl font-bold">over</div> */}
              <div className="stat-value">100+</div>
              <div className=" text-xl font-bold">students</div>
            </div>
            
            <div className="stat place-items-center rounded-xl bg-[#f0f4f8]">
              {/* <div className="stat-title text-xl font-bold">over</div> */}
              <div className="stat-value">30+</div>
              <div className=" text-sm font-bold">Problem Solving Sessions</div>
            </div>

            <div className="stat place-items-center rounded-xl bg-[#f0f4f8]">
              {/* <div className="stat-title">over</div> */}
              <div className="stat-value text-secondary">10+</div>
              <div className="text-sm font-bold">
                Programming Contests
              </div>
              </div>
            
          {/* <div className="shadow gap-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
            <div className="stat place-items-center rounded-xl bg-[#f0f4f8]">
              {/* <div className="stat-title">over  </div> */}
              <div className="stat-value">3+</div>
              <div className="text-sm font-bold">seminars</div>
            </div>
          
          {/* <div className="stats shadow gap-3"> */}
            <div className="stat place-items-center rounded-xl bg-[#f0f4f8]">
              {/* <div className="stat-title text-xl font-bold">over</div> */}
              <div className="stat-value">2+</div>
              <div className="text-sm font-bold">hackathons</div>
            </div>

            <div className="stat place-items-center rounded-xl bg-[#f0f4f8]">
              {/* <div className="stat-title">over</div> */}
              <div className="stat-value text-secondary">5+</div>
              <div className="text-sm font-bold">
                workshops
              </div>
            </div>
            
{/* <div className="shadow gap-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
            <div className="stat place-items-center rounded-xl bg-[#f0f4f8]">
              {/* <div className="stat-title">over  </div> */}
              <div className="stat-value">8+</div>
              <div className="text-sm font-bold">Tech Talks</div>
            </div>
            
            <div className="stat place-items-center rounded-xl bg-[#f0f4f8]">
              {/* <div className="stat-title">over  </div> */}
              <div className="stat-value">12+</div>
              <div className="text-sm font-bold">Projects Completed</div>
            </div>
            
            <div className="stat place-items-center rounded-xl bg-[#f0f4f8]">
              {/* <div className="stat-title">over  </div> */}
              <div className="stat-value">6+ articles</div>
              <div className="text-sm font-bold"> Blog & Magazine Publications</div>
            </div>
          </div>
          
          

        </div>
        
      </div>

      <NavLink
          to="/registration"
          className={({ isActive }) =>
          `text-lg  font-bold text-start justify-end items-center ${
            isActive ? "text-[#1d78cd]" : "text-[#000]"
          } `
        }
        >
          <button className="btn btn-wide w-full bg-[#f0f4f8] justify-center border-2 border-[#2e4358] hover:bg-[#707371]">Register Now</button>
        </NavLink>
      
    </div>
  );
};

export default Whyjoin;
