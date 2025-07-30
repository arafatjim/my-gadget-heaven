import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { useLocation } from "react-router-dom";
import WelcomeText from "../WelcomeText/WelcomeText";
import Home from "../Home/Home";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Mission from "../Mission/Mission";
import Activities from "../Activities/Activities";
import Whyjoin from "../WhyJoin/Whyjoin";
import Gallary from "../Gallary/Gallary";
import Events from "../Events/Events";
import HomeGallery from "../HomeGallery/HomeGallery";

const Root = () => {
const location = useLocation();
const isHome = location.pathname === "/home" || location.pathname === "/";

return (
          <div
                    className="min-h-screen flex flex-col bg-[#1f1f1f] text-white dark:bg-gray-900 dark:text-white transition-colors duration-300"
                    style={{ fontFamily: "'Electrolize', sans-serif" }}
          >
                    <NavBar />
                    <hr className="border-gray-300 dark:border-gray-700" />
                    <div className="w-[98%] mx-auto">
                              {isHome && <Banner />}
                              <div>{isHome && <About />}</div>
                              <div>{isHome && <Events />}</div>
                              <div>{isHome && <Activities />}</div>
                              <div>{isHome && <Whyjoin />}</div>
                              {/* <div>{isHome && <Gallary />}</div> */}
                              <div>{isHome && <HomeGallery />}</div>
                              <div>{isHome && <Contacts />}</div>
                              <div className="w-[98%] mx-auto h-full">
                                        <Outlet />
                              </div>
                              <Footer className="w-[100%]" />
                    </div>
          </div>
);
};

export default Root;
