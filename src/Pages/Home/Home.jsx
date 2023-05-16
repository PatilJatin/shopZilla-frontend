import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Services from "../../components/Services";
import {
  Ipad,
  Iphone,
  Iwatch,
  airPods,
  company2,
  company8,
  macbook,
  company3,
  company4,
  company5,
  company6,
  company7,
  company9,
  company10,
  company11,
  company12,
} from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { company1 } from "../../assets";
import { ChevronUp, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
    company9,
    company10,
    company11,
    company12,
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
    },
    {
      question: "What is the difference between a free and paid account?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
    },
    {
      question: "How can I cancel my subscription?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
    },
  ];
  return (
    <section className="bg-primary-500">
      <HeroSection />
      <div className="w-[80%] mx-auto">
        <h3 className="text-3xl text-white font-extrabold ">
          Apple at ShopZilla
        </h3>
        <div className="flex flex-wrap justify-between items-baseline space-y-3">
          <NavLink
            to={`/product/646340403d0e52ded74a7855`}
            className={"basis-[48%]"}
          >
            <div className="mx-auto ">
              <img src={macbook} alt="" className="rounded-lg cursor-pointer" />
            </div>
          </NavLink>
          <NavLink
            to={`/product/646343833d0e52ded74a78d1`}
            className={"basis-[48%]"}
          >
            <div className="mx-auto ">
              <img src={Iphone} alt="" className="rounded-lg cursor-pointer" />
            </div>
          </NavLink>
          <NavLink
            to={`/product/646345093d0e52ded74a78db`}
            className={"basis-[30%]"}
          >
            <div className="mx-auto ">
              <img src={airPods} alt="" className="rounded-lg cursor-pointer" />
            </div>
          </NavLink>
          <NavLink
            to={`/product/646346093d0e52ded74a78e5`}
            className={"basis-[30%]"}
          >
            <div className="mx-auto ">
              <img src={Ipad} alt="" className="rounded-lg cursor-pointer" />
            </div>
          </NavLink>
          <NavLink
            to={`/product/646346f23d0e52ded74a78f1`}
            className={"basis-[30%]"}
          >
            <div className="mx-auto ">
              <img src={Iwatch} alt="" className="rounded-lg cursor-pointer" />
            </div>
          </NavLink>
        </div>
      </div>
      <Services />
      <div className="w-[80%] mx-auto">
        <h3 className="text-3xl text-white font-extrabold ">Top Brands</h3>
        <div className="relative my-6">
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image} className="">
                <img
                  src={image}
                  alt="slide"
                  className="object-contain w-[100px] rounded-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-2 py-10 md:px-0 ">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 lg:mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              assumenda
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                  onClick={() => handleAccordionClick(index)}
                >
                  <span className="flex text-start text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-200" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-200" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-200">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="textbase mt-6 text-center text-gray-300">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#"
              title=""
              className="font-semibold text-white hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Home;

// NavLink to={`/product/${_id}`}
