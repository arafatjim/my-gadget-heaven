import React, { useEffect, useState } from 'react';
import gadgetJson from '../../../public/products.json'
import SingleGadget from '../SingleGadget/SingleGadget';
const Gadgets = () => {
          const [gadgets,setGadget]=useState([]);
          useEffect(()=>{
                    setGadget(gadgetJson);
          },[]);
const filterGadgets = (category) => {
          if (category === 'All') {
                    setGadget(gadgetJson);
          } else {
                    const filtered = gadgetJson.filter(gadget => gadget.category === category);
                    setGadget(filtered);
          }
}         

          return (
                    <div className='w-full flex flex-col gap-2 justify-around lg:flex-row items-start pt-46 pb-0'>
                              {/* <p>Total : {gadgets.length} </p> */}
                              <div className='w-[80%] grid gap-4 mx-auto bg-[#fff1f1] px-8 py-4 rounded-2xl lg:w-3/12 grid-cols-1 '>
                                        <button
                                                  onClick={() => filterGadgets('All')}
                                                  className='font-semibold p-2 rounded-2xl text-[#bd17f4] border-2 border-[#bd17f4] bg-[#ffffff] active:bg-[#2bcd5e]'
                                        >
                                                  All
                                        </button>
                                        <button
                                                  onClick={() => filterGadgets('Laptops')}
                                                  className='font-semibold p-2 rounded-2xl text-[#bd17f4] border-2 border-[#bd17f4] active:bg-[#2bcd5e]'
                                        >
                                                  Laptop
                                        </button>
                                        <button
                                                  onClick={() => filterGadgets('Air Bud')}
                                                  className='font-semibold p-2 rounded-2xl text-[#bd17f4] border-2 border-[#bd17f4] active:bg-[#2bcd5e]'
                                        >
                                                  Air Buds
                                        </button>
                                        <button
                                                  onClick={() => filterGadgets('Audio')}
                                                  className='font-semibold p-2 rounded-2xl text-[#bd17f4] border-2 border-[#bd17f4] active:bg-[#2bcd5e]'
                                        >
                                                  Head Phone
                                        </button>
                                        <button
                                                  onClick={() => filterGadgets('Accessories')}
                                                  className='font-semibold p-2 rounded-2xl text-[#bd17f4] border-2 border-[#bd17f4] active:bg-[#2bcd5e]'
                                        >
                                                  Others
                                        </button>
                              </div>
                              <div className='w-9/12 grid grid-cols-1 justify-center mx-auto md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                        {gadgets.map((gadget, index) => (
                                                  <SingleGadget gadget={gadget} key={index} />
                                        ))}
                              </div>
                    </div>
          );
};

export default Gadgets;