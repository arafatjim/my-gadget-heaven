import React from "react";
import visionImg from "../../assets/visionary.png"; // Assuming you have an image for the vision
import { Link } from "react-router-dom";
const WelcomeText = () => {
  return (
    <div className="w-full px-4 rounded-lg pt-3 items-center mt-11">
      <div className="text-center mb-6 shadow-lg py-16">
        <h1 className="text-4xl font-extrabold text-[#164294]">Our Vision</h1>
        <p className="text-lg ">
          Empowering the next generation of tech leaders through innovation and
          collaboration.
        </p>
      </div>


      <div className="grid mx-auto grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="card bg-[#b265d3] w-86 shadow-sm">
        <figure className="px-10 pt-10 w-58 h-58 mx-auto">
          <img
            src={visionImg}
            alt="Shoes"
            className="rounded-sm  object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">Our Vision</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <Link to="#"><button className="btn btn-primary">Explore More</button></Link>
          </div>
        </div>
      </div>
      <div className="card bg-[#b265d3] w-86 shadow-sm">
        <figure className="px-10 pt-10 w-58 h-58 mx-auto">
          <img
            src={visionImg}
            alt="Shoes"
            className="rounded-sm  object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">Our Vision</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <Link to="#"><button className="btn btn-primary">Explore More</button></Link>
          </div>
        </div>
      </div>
      <div className="card bg-[#b265d3] w-86 shadow-sm">
        <figure className="px-10 pt-10 w-58 h-58 mx-auto">
          <img
            src={visionImg}
            alt="Shoes"
            className="rounded-sm  object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">Our Vision</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <Link to="#"><button className="btn btn-primary">Explore More</button></Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WelcomeText;
