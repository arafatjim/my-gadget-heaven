import React from "react";
import { Helmet } from "react-helmet-async";
import locationIcon from "../../assets/Icons/map.png";
import emailIcon from "../../assets/Icons/email.png";
import phoneIcon from "../../assets/Icons/phone-call.png";
import facebookIcon from "../../assets/Icons/facebook.png";
import Mylocation from "../Mylocation/Mylocation";
const Contacts = () => {
  return (
    <div className="my-10 p-2 bg-[#1f1f1f] mt-20 text-white shadow-lg text-center ">
      <Helmet>
        <title>DeltaITClub | Contact</title>
      </Helmet>
      <h1 className="text-4xl my-4 font-extrabold">Contact Us</h1>
      <div className="grid justify-center p-4 gap-4 items-center w-full  mx-auto md:grid-cols-2 lg:grid-cols-2">
        <div className="card w-auto h-36 card-lg shadow-sm flex flex-col justify-stretch md:h-60 lg:h-full ">
          <Mylocation></Mylocation>
        </div>
        <div className="card  w-full p-1 gap-2 my-auto card-lg shadow-sm flex flex-col justify-stretch h-full">
          <section className="flex flex-grow  justify-start items-center gap-4 p-2 rounded-xl bg-[#2f2f2f] shadow-lg hover:bg-white/20 transition">
            <img
              className="w-12 h-12 bg-[#7d7b7b] p-1 bg-cover rounded-xl"
              src={locationIcon}
              alt=""
            />
            <div className="text-start grid">
              <h2 className="text-xl font-extrabold">Address</h2>
              <p>P6HQ+F7F, Babukha Road, Shatgara,Rangpur</p>
            </div>
          </section>
          <section className="flex flex-grow  justify-start items-center gap-4 p-2 rounded-xl bg-[#2f2f2f] shadow-lg hover:bg-white/20 transition">
            <img
              className="w-12 h-12 bg-[#7d7b7b] p-1 bg-cover rounded-xl"
              src={phoneIcon}
              alt=""
            />

            <div className="text-start grid">
              <h1 className="text-xl font-extrabold">Phone</h1>

              <p>+88 01712-081815</p>
            </div>
          </section>
          <section className="flex flex-grow  justify-start items-center gap-4 p-2 rounded-xl bg-[#2f2f2f] shadow-lg hover:bg-white/20 transition">
            <img
              className="w-12 h-12 bg-[#7d7b7b] p-1 bg-cover rounded-xl"
              src={emailIcon}
              alt=""
            />
            <div className="text-start w-auto grid">
              <h1 className="text-xl font-extrabold">E-mail</h1>
              <p className="">deltaitclub.official @gmail.com</p>
            </div>
          </section>
          <section className="flex flex-grow  justify-start items-center gap-4 p-2 rounded-xl bg-[#2f2f2f] shadow-lg hover:bg-white/20 transition">
            <img
              className="w-12 h-12 bg-[#7d7b7b] p-1 bg-cover rounded-xl"
              src={facebookIcon}
              alt=""
            />
            <div className="text-start">
              <h2 className="text-xl font-extrabold">Facebook page</h2>
              <p>fb.com/deltaitclub.official</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
