import React from "react";
import { discord, footerLogo, insta, twitter } from "../assets";
import { support, Offers, AboutUs } from "../constants/index";

const Footer = () => {
  return (
    <>
     
      <footer className="bg-primary-500 w-full text-white px-6 py-16 relative">
        <div className=" flex flex-wrap gap-6 flex-col md:flex-row md:gap-3 my-5">
          <a href="/" className="object-contain basis-[20%] mx-auto ">
            <img
              src={footerLogo}
              alt="Compay_Logo"
              className="w-[120px] h-[120px] "
            />
          </a>

          <div className="footer_container flex justify-between basis-[40%] max-w-[560px] mx-auto">
            <ul className="list-none mx-6">
              {support.map((link) => {
                return (
                  <li key={link.id} className="hover:text-gray-400">
                    {" "}
                    {link.title}
                  </li>
                );
              })}
            </ul>
            <ul className="list-none mx-6">
              {Offers.map((link) => {
                return (
                  <li key={link.id} className="hover:text-gray-400">
                    {" "}
                    {link.title}
                  </li>
                );
              })}
            </ul>
            <ul className="list-none mx-6">
              {AboutUs.map((link) => {
                return (
                  <li key={link.id} className="hover:text-gray-400">
                    {" "}
                    {link.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="Followus basis-[20%] mx-auto">
            <h1 className="text-3xl font-extrabold ">Follow Us</h1>
            <div className="flex  my-4 ">
              <img
                className="w-[50px] h-[50px] cursor-pointer "
                src={discord}
                alt=""
              />
              <img
                className="w-[50px] h-[50px] cursor-pointer"
                src={insta}
                alt=""
              />
              <img
                className="w-[50px] h-[50px] cursor-pointer"
                src={twitter}
                alt=""
              />
            </div>
          </div>
        </div>
        <hr className="mx-5" />
        <div className="sub-footer"></div>
      </footer>
    </>
  );
};

export default Footer;
