import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import heartImg from '../../assets/heart.png'; // Assuming you have a heart image for the like button
import addCartImg from '../../assets/checklist.png'; // Assuming you have an add to cart image
const GadgetDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData(); // all products
  console.log("URL ID:", product_id);

  const gadget = data.find(
    (item) => item.product_id.toLowerCase() === product_id.toLowerCase()
  );
  console.log(gadget);
  if (!gadget) {
    return (
      <div className="text-red-500 text-center text-xl p-4">
        ❌ Product not found for ID: {product_id}
      </div>
    );
  }

  const { product_image, Specification, description, product_title, price,stock_quantity,rating } =
    gadget;

  return (
    <div className="bg-[#f0f0f0] min-h-screen justify-center items-center">

      
        <div className="bg-[#2076bc] text-white mx-auto h-[250px] w-[98%]  relative flex flex-col -mb-20 items-center justify-center">
          <div className="absolute top-0 items-center justify-center w-full pt-8 text-center">
        <h1 className="font-bold text-3xl">Products Details</h1>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
        
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
    
      
      <div className="bg-[#ffffff] border-2 relative border-[#9e9e9e] flex flex-col lg:flex-row-reverse items-center justify-between gap-4 p-4 lg:p-8 rounded-lg shadow-lg mx-auto -mt-28 max-w-6xl">
      <div className="grid gap-1 p-2 ">
        <p className="font-bold text-3xl text-[#1bc518] ">{product_title}</p>
        <p className="font-semibold text-xl">Price: ${price}</p>
      <p className="text-[#bebebe]">{description}</p>
      <h3 className="border-2 border-[#15b632] font-semibold text-[#0a9b4d] px-4 rounded-4xl w-34">In stock : {stock_quantity}</h3>
          <p className="text-[#9a9999]">{description}</p>
          <h1 className="text-black font-bold">Specification:</h1>

          <ol className="list-decimal pl-5 items-center text-[#9a9999] normal-case">
            {Specification.map((spec, index) => (
              <li className="" key={index}>{spec}</li>
            ))}
          </ol>
          <div className="rating rating-xs">
             <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#ce1717]" aria-label="1 star" />
             <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#ce1717]" aria-label="1 star" />
             <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#ce1717]" aria-label="1 star" />
             <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#ce1717]" aria-label="1 star" />
             <input type="radio" name="rating-5" className="mask mask-star-2 bg-[#ce1717]" aria-label="1 star" />
             
          </div>
          <div className="font-semibold flex gap-4 items-center"> 
            <span className=" "> Rating: </span> 
            <span className="text-[#14512a] btn btn-ghost rounded-4xl"> {rating} / 5 </span> 
          </div>
          <div className="justify-start items-center flex gap-2 mt-4">
           <div className="btn bg-[#b20bf9] rounded-4xl px-6 text-white hover:bg-[#15b632]">
             <h className="">Add to cart</h>
             <img className="w-6 h-6" src={addCartImg} alt="" />
           </div>
            <button className="btn btn-ghost p-2 rounded-full hover:bg-[#15b632]">
              <img className="w-6 h-6" src={heartImg} alt="" />
            </button>
      </div>
    </div>
    <div className="card bg-base-100 w-full h-full max-w-sm shrink-0 shadow-2xl ">
          <img className="rounded-sm h-[200px] lg:h-[350px] " src={product_image} alt="" />
        </div>
    </div>
    </div>

  );
};

export default GadgetDetails;
