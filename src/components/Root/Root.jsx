import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { useLocation } from "react-router-dom";
import WelcomeText from "../WelcomeText/WelcomeText";
import Home from "../Home/Home";
import About from "../About/About";

const Root = () => {
const location = useLocation();
const isHome = location.pathname === "/home" || location.pathname === "/";

return (
          <div className="min-h-screen flex flex-col" style={{ fontFamily: "Consolas, monospace" }}>
                    <NavBar />
                    <hr />
                    <div className="w-[98%] mx-auto">
                              {isHome && <Banner />}
                              <div>
                                        {isHome && <About />}
                              </div>
                              {/* <div className="min-h-[60vh]">
                                        {isHome ? <Home /> : <Outlet />}
                              </div> */}
                              <div className="-mb-40 w-[98%] mx-auto min-h-svh">
                                        <Outlet />
                              </div>
                              <Footer className="w-[100%]" />
                    </div>
          </div>
);
};

export default Root;
