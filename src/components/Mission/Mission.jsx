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
                    
                              
                              
                              <div className="grid justify-center  gap-4 items-center mx-auto lg:grid-cols-2">
                                        <Helmet>
                                        <title>Delta IT Club | Missions & Visions</title>
                              </Helmet>
                                        {/* Mission card */}
                                        <div className="card w-auto card-lg shadow-sm border-2 border-dotted flex flex-col justify-stretch h-full">
                                                  <div className="card-body bg-[#1f1f1f] text-white rounded-xl">
                                                            <h2 className="card-title  justify-center">Our Missions:</h2>
                                                            {missions.map((mission, idx) => (
                                                                      <div key={idx} className="flex items-center border-2 border-[#515151] bg-[#2f2f2f] p-2 rounded-lg  gap-2 mb-4 hover:bg-white/20 transition">
                                                                                <img className="w-10 h-10 p-1 rounded-lg bg-[#8b8b8b]" src={missionTargetImg} alt="" />
                                                                                <p className="text-start">{mission}</p>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>
                                        {/* Vision card */}
                                        <div className="card w-auto border-2 border-dotted card-lg shadow-sm flex flex-col justify-stretch h-full">
                                                  <div className="card-body bg-[#1f1f1f] text-white rounded-xl">
                                                            <h2 className="card-title justify-center">Our Visions:</h2>
                                                            {visions.map((vision, idx) => (
                                                                      <div key={idx} className="flex items-center border-2 border-[#515151] bg-[#2f2f2f] p-2 rounded-lg  gap-2 mb-4 hover:bg-white/20 transition">
                                                                                <img className="w-10 h-10 p-1 rounded-lg bg-[#8b8b8b]" src={visionTargetImg} alt="" />
                                                                                <p className="text-start">{vision}</p>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>
                              </div>
                    
          );
};

export default Mission;
