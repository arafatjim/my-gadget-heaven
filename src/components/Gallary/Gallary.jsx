import React from "react";
import { Helmet } from "react-helmet-async";
// import singleRightArrowImg from '../../assets/single-right-chevron.png'
import TEJGAO from "../../assets/Gallary/TEJGAO.jpg";
import TEJGAO2 from "../../assets/Gallary/TEJGAO2.jpg";
import TEJGAO3 from "../../assets/Gallary/TEJGAO3.jpg";
import RECPC from "../../assets/Gallary/RECPC.jpg";
import RECPC2 from "../../assets/Gallary/RECPC2.jpg";
import hstu from "../../assets/Gallary/hstu.jpg";
import hstu2 from "../../assets/Gallary/hstu2.jpg";
import hstu3 from "../../assets/Gallary/hstu3.jpg";
import hstu4 from "../../assets/Gallary/hstu4.jpg";
import hstu5 from "../../assets/Gallary/hstu5.jpg";
import hstu6 from "../../assets/Gallary/hstu6.jpg";
import hstu7 from "../../assets/Gallary/hstu7.jpg";
// import hstu8 from "../../assets/Gallary/hstu8.jpg";
import delta1 from "../../assets/Gallary/delta1.jpg";
import { NavLink } from "react-router-dom";

const Gallary = () => {
  const images = [
    delta1,
    TEJGAO,
    TEJGAO2,
    TEJGAO3,
    RECPC,
    RECPC2,
    hstu,
    hstu2,
    hstu3,
    hstu4,
    hstu5,
    hstu6,
    hstu7,
    
    
  ];

  return (
    <div className="mb-8 mt-20 p-4 bg-[#2f2f2f] shadow-lg text-center">
      <Helmet>
        <title>Delta IT Club | Gallery</title>
      </Helmet>
      <h1 className="text-center text-4xl font-extrabold mb-4">
        Achievement Gallery
      </h1>

      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="card card-body  container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className={`w-full h-full rounded-lg shadow-sm min-h-48 dark:bg-gray-500 aspect-square ${
                index === 0 ? "col-span-2 row-span-2 md:col-start-3 md:row-start-1" : ""
              }`}
            />
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Gallary;
