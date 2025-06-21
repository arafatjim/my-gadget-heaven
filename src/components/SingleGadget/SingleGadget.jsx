import React from "react";
import { Link} from 'react-router-dom';

const SingleGadget = ({gadget}) => {
  
  const {product_id, product_image, product_title, price } = gadget;
  return (
    <div className="card bg-base-800 border-2 border-[#90d0e8]  h-62 shadow-sm p-1 lg:w-48">
      <figure className="object-cover">
        <img
          className="object-cover w-full h-full m-2 bg-amber-700"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body bg-[#346e7c] text-white p-2">
        <h2 className=" text-[.8rem] font-bold">{product_title}</h2>
        <p className="font-semibold">${price}</p>
        <div className="card-actions justify-start ">
          <Link to={`/gadgetsdetails/${product_id}`} className="btn rounded-full border-2 border-[#ad24c8] text-[#ad24c8] ">
            View Details
          </Link>
          {/* to={`/gadgets/${product_id}`} */}
        </div> 
      </div>
    </div>
  );
};

export default SingleGadget;
// "product_id": "P001",
//     "product_title": "Dell Inspiron 15",
//     "product_image": "https://i.ibb.co/0VYmWBjn/dell01234.jpg",
//     "category": "Laptops",
//     "price": 749.99,
//     "description": "A powerful and reliable Dell laptop perfect for work and study.",
//     "Specification": ["Intel Core i5", "8GB RAM", "512GB SSD", "15.6\" FHD Display"],
//     "availability": true,
//     "rating": 4.6,
//     "brand": "Dell",
//     "stock_quantity": 25
