import React from "react";
import activityImg from "../../assets/activitiesbanner.jpg"; // Assuming you have an image for the activity
import { Helmet } from "react-helmet-async";
const SingleActivityCard = ({ activity }) => {
  const {title, description, image } = activity;
  return (
    <div className="flex justify-center items-center border-2 border-[#565454] rounded-xl text-white ">
      <div className="card bg-[#2f2f2f] w-auto h-96 shadow-sm hover:bg-white/20 transition">
        <figure>
          <img className="w-full h-48 object-cover"
            src={activityImg}
            alt={title}
          />
        </figure>
        <div className="card-body text-center  items-center">
          <h2 className="card-title">{title}</h2>
          <p className="">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleActivityCard;
