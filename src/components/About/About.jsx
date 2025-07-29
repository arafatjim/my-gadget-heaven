import React from 'react';
import Mission from '../Mission/Mission';
import { Helmet } from 'react-helmet-async';
const About = () => {
          return (
                    <div className='h-auto bg-[#e9ecef] shadow-xl items-center justify-center p-10'>
                              <Helmet>
                                                                      <title>DeltaITClub|About</title>
                                                            </Helmet>
                              <h1 className='about-us text-center  text-4xl font-extrabold mt-16 mb-10'>About Us</h1>
                              <p className='about-us sm:text-sm lg:text-xl text-justify  mt-10 mb-8'>Delta IT Club is the official community platform for tech enthusiast students of Delta Computer Science College, Rangpur. Our club brings together passionate individuals who aim to develop their skills, collaborate on innovative ideas, and gain practical experience. We regularly organize tech talks, problem solving sessions, programming contests, hackathons, workshops & seminars, and other IT-based events to enhance academic and professional growth among DCSC students.</p>
                              <Mission></Mission>
                              <p className='about-us sm:text-sm lg:text-xl text-justify  mt-10 mb-8'>Delta IT Club is more than just a club - it’s a community, a family where young minds dream, build, and grow through the power of technology. We believe that knowledge sharing, collaboration, and innovation are the keys to shaping the future. Together, we learn, lead, and create - moving one step closer to becoming the tech leaders of tomorrow.</p>
                    </div>
          );
};

export default About;