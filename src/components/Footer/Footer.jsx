import React from "react";
const Footer = () => {
  return (
    <div className="mt-44 bottom-0 bg-[#b20bf9] text-white mx-auto">
      <footer className="footer w-full flex justify-center text-white pt-2 text-center mx-auto">
        <aside className=" grid items-center mx-auto">
             <div className="text-5xl mx-auto font-extrabold normal-case">
                 <span className="text-[#ffffff]">Iinfy</span>
                 <span className="text-[#0ed958]">Tech</span>
             </div>
          <p className="mx-auto text-sm font-semibold">
            
            Leading the way in cutting-edge technology and innovation.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4"></div>
        </nav>
      </footer>

      <footer className="footer mx-auto text-white  sm:justify-around footer-horizontal pt-3 pb-1">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <aside className="footer footer-center p-4  text-[#dedede] mx-auto">
    <p>Copyright © {new Date().getFullYear()} - All right reserved by IinfyTech Ltd.</p>
  </aside>
    </div>
  );
};

export default Footer;
