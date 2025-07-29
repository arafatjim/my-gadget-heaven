import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
  return (
    // <div className='w-full rounded-b-xl px-4 mx-auto bg-[#ffffff] mt-14 items-center '>
    //           <div className='text-center items-center px-4 pb-10 mx-auto relative'>
    //                     <h1 className='text-xl font-bold'>Upgrade Your Tech Accessorize with <br />
    //                      Gadget Heaven Accessories</h1>
    //           <p className='py-3 text-xs'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
    //            the coolest accessories, we have it all!</p>
    //           <Link to='/about'  >
    //                     <button className="btn btn-success ">Explore More</button>
    //           </Link>
    //           <Link to='/about'  >
    //                     <button className="btn btn-success ">Explore More</button>
    //           </Link>
    //           <Link to='/about'  >
    //                     <button className="btn btn-success ">Explore More</button>
    //           </Link>
    //           </div>
    //           {/* <div className='flex justify-center mx-auto bop mb-26'>
    //                     <img className=' flex h-68 mx-auto border-16 border-[#f1f1f1]  absolute rounded-2xl w-11/12 lg:w-10/12 ' src={bannerImg} alt="" />
    //           </div> */}

    // </div>
    <div className="hero bg-base-200 min-h-96 items-center mx-auto justify-center my-10">
      <div className="hero-content grid lg:grid-cols-2 gap-8 text-center">
        <div className="text-center lg:text-left">
          <h1 className="sm:text-3xl font-bold lg:text-5xl "> 
            <span className="sm:text-sm lg:text-xl">Welcome to</span>
             <br /> Delta IT club!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <Link
            to="#"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <button className="btn relative bg-[#0669c1e4] text-[#fff] hover:bg-[#04dd50]">
              Join Now
            </button>
          </Link>
          <Link
            to="/blogs"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <button className="btn relative bg-[#0669c1e4] text-[#fff] hover:bg-[#04dd50]">
              Explore More
            </button>
          </Link>
          <Link
            to="/about"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <button className="btn relative bg-[#0669c1e4] text-[#fff] hover:bg-[#04dd50]">
              About Us
            </button>
          </Link> */}
        </div>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl items-center justify-center ">
          <div className="card-body items-center text-center justify-center">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
