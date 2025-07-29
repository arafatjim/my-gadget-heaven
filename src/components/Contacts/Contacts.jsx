import React from 'react';
import locationIcon from '../../assets/location.png';
import emailIcon from '../../assets/email.png';
import phoneIcon from '../../assets/phone.png';
import facebookIcon from '../../assets/facebook.png';
import Mylocation from '../Mylocation/Mylocation';
const Contacts = () => {
          return (
                    <div className='my-10 p-4 bg-[#f0f4f8] shadow-lg text-center '>
                              <h1 className='text-4xl my-4 font-extrabold'>Contact Us</h1>
                              <div className='grid justify-center p-4 gap-4 items-center mx-auto lg:grid-cols-2'>
                                        <div className='card w-auto bg-base-100 card-lg shadow-sm flex flex-col justify-stretch h-full'>
                                        <Mylocation></Mylocation>
                              </div>
                              <div className='card p-4 gap-2 w-auto bg-base-100 card-lg shadow-sm flex flex-col justify-stretch h-full'>
                                     <section className='flex justify-start items-center gap-4 p-4 bg-[#f0f4f8] shadow-lg'>
                                        <img className='w-10 h-10' src={locationIcon} alt="" />
                                        <div className='text-start'>
                                                  {/* <h2>Address</h2> */}
                                        <p>P6HQ+F7F, Babukha Road, Shatgara,Rangpur</p>
                                        </div>
                                        </section>   
                                     <section className='flex justify-start items-center gap-4 p-4 bg-[#f0f4f8] shadow-lg'>
                                        <img className='w-10 h-10' src={phoneIcon} alt="" />
                                        
                                          <div className='text-start'>
                                                  {/* <h2>Phone</h2>   */}
                                        <p>+88 01712081815</p>
                                        </div>
                                        </section> 
                                     <section className='flex justify-start items-center gap-4 p-4 bg-[#f0f4f8] shadow-lg'>
                                        <img className='w-10 h-10' src={emailIcon} alt="" />
                                        <div className='text-start'>
                                                  {/* <h2>Email</h2> */}
                                                  <p>deltaitclub.official@gmail.com</p>
                                        </div>
                                        </section>   
                                     <section className='flex justify-start items-center gap-4 p-4 bg-[#f0f4f8] shadow-lg'>
                                        <img className='w-10 h-10' src={facebookIcon} alt="" />
                                        <div className='text-start'>
                                                  {/* <h2>Facebook</h2> */}
                                                  <p>Delta IT Club</p>
                                        </div>
                                        </section>   
                              </div>
                              </div>
                    </div>
          );
};

export default Contacts;