 import React from 'react';
import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
          return (
                    
                    <div className='w-[98%] rounded-b-xl px-4 mx-auto bg-[#b20bf9] py-4 items-center text-white'>
                              <div className='text-center items-center px-4 pb-10 mx-auto relative'>
                                        <h1 className='text-xl font-bold'>Upgrade Your Tech Accessorize with <br />
                                         Gadget Heaven Accessories</h1>
                              <p className='py-3 text-xs'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                               the coolest accessories, we have it all!</p>
                              <button className="btn btn-success ">Shop Now</button>
                              </div>
                              <div className='flex justify-center mx-auto bop mb-26'>
                                        <img className=' flex h-68 mx-auto border-16 border-[#f1f1f1]  absolute rounded-2xl w-11/12 lg:w-10/12 ' src={bannerImg} alt="" />
                              </div>
                              
                    </div>
                    
          );
};

export default Banner;