import React from "react";
import activityImg from "../../assets/banner.jpg";
const SingleActivityCard = ({ activity }) => {
  const {title, description, image } = activity;
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-96 h-96 shadow-sm">
        <figure>
          <img className="w-full h-48 object-cover"
            src={image || activityImg}
            alt={title}
          />
        </figure>
        <div className="card-body text-center items-center">
          <h2 className="card-title">{title}</h2>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleActivityCard;
