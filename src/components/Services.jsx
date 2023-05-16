import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const Services = () => {
  return (
    <div className="w-[80%]  mx-auto flex flex-wrap gap-4 text-white font-semibold justify-between items-center md:items-stretch pt-12 pb-20 ">
      <div className="basis-[100%] py-2 mx-auto md:basis-[45%] lg:basis-[21%] flex flex-col  flex-wrap justify-center items-center bg-primary-300 gap-2 rounded-lg  ">
        <div className="bg-green-600 rounded-full w-[50px] h-[50px] flex justify-center items-center">
          <LocalShippingIcon />
        </div>
        <p className="px-2 py-1">Swiftly delivered to your door</p>
      </div>

      <div className="basis-[100%] py-2 mx-auto md:basis-[45%] lg:basis-[21%] flex flex-col  flex-wrap justify-center items-center bg-primary-300 gap-2 rounded-lg  ">
        <div className="bg-cyan-600 rounded-full w-[50px] h-[50px] flex justify-center items-center">
          <SecurityIcon />
        </div>

        <p className="px-2 py-1">
          From our hands to your doorstep, without any contact
        </p>
      </div>
      <div className="basis-[100%] py-2 mx-auto md:basis-[45%] lg:basis-[21%] flex flex-col  flex-wrap justify-center items-center bg-primary-300 gap-2 rounded-lg  ">
        <div className="bg-yellow-600 rounded-full w-[50px] h-[50px] flex justify-center items-center">
          <CurrencyRupeeIcon />
        </div>

        <p className="px-2 py-1">
          Your satisfaction guaranteed or your money back - no questions asked!
        </p>
      </div>

      <div className="basis-[100%] py-2  mx-auto md:basis-[45%] lg:basis-[21%] flex flex-col  flex-wrap justify-center items-center bg-primary-300 gap-2 rounded-lg  ">
        <div className="bg-indigo-600 rounded-full w-[50px] h-[50px] flex justify-center items-center">
          <CreditScoreIcon />
        </div>

        <p className="px-2 py-1">
          Shop with confidence, thanks to our ultra-secure payment system.
        </p>
      </div>
    </div>
  );
};

export default Services;
