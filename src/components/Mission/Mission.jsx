import React from "react";
import { Helmet } from "react-helmet-async";
import missionTargetImg from '../../assets/target.png';
import visionTargetImg from '../../assets/visionary.png'; 
const missions = [
          "To spark interest in areas like competitive programming, software development, artificial intelligence, cybersecurity, etc among DCSC students.",
          "To enhance the technical and problem solving skills of DCSC students.",
          "To represent DCSC in national and international competitions.",
          "To build a bridge between industry and academia for DCSC students."
];

const visions = [
          "To build an active, collaborative, technology-based community.",
          "To provide a platform that supports future career development.",
          "To create an innovation and research-oriented environment.",
          "To transform students into skilled professionals."
];

const Mission = () => {
          return (
                    <div className="text-center p-2 my-10 bg-[#f0f4f8] shadow-lg">
                              <Helmet>
                                        <title>Delta IT Club | Missions & Visions</title>
                              </Helmet>
                              <h1 className="text-4xl font-extrabold my-4">Missions & Visions</h1>
                              <div className="grid justify-center gap-4 items-center mx-auto lg:grid-cols-2">
                                        {/* Mission card */}
                                        <div className="card w-auto bg-base-100 card-lg shadow-sm flex flex-col justify-stretch h-full">
                                                  <div className="card-body">
                                                            <h2 className="card-title">Missions:</h2>
                                                            {missions.map((mission, idx) => (
                                                                      <div key={idx} className="flex items-center gap-2 mb-4">
                                                                                <img className="w-4 h-4" src={missionTargetImg} alt="" />
                                                                                <p className="text-start">{mission}</p>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>
                                        {/* Vision card */}
                                        <div className="card w-auto bg-base-100 card-lg shadow-sm flex flex-col justify-stretch h-full">
                                                  <div className="card-body">
                                                            <h2 className="card-title">Visions:</h2>
                                                            {visions.map((vision, idx) => (
                                                                      <div key={idx} className="flex items-center gap-2 mb-4">
                                                                                <img className="w-4 h-4" src={visionTargetImg} alt="" />
                                                                                <p className="text-start">{vision}</p>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
};

export default Mission;
