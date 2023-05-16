import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary-500 overflow-hidden py-8">
      <h1 className="text-2xl font-bold text-white text-center py-3">
        Contact Us
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7642.675621094893!2d74.24499673860855!3d16.709988212087797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10056bf54a2e1%3A0xcee17ff88bd63587!2sKadamwadi%2C%20Kolhapur%2C%20Maharashtra%20416005!5e0!3m2!1sen!2sin!4v1682840320119!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="form-container w-[80%] mx-auto my-3 rounded-md p-6 ">
        <form
          action="https://formspree.io/f/meqwnoop"
          method="POST"
          className="flex flex-col space-y-3 "
        >
          <input
            type="text"
            name="username"
            id=""
            autoComplete="off"
            required
            placeholder="Username"
            className=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none border-4 focus:border-green-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <input
            type="email"
            name="email"
            id=""
            autoComplete="off"
            required
            placeholder="Email Address"
            className=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none border-4 focus:border-green-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            autoComplete="off"
            required
            placeholder="Enter Your Message"
            className=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none border-4 focus:border-green-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          ></textarea>
          <button
            type="submit"
            value="send"
            className=" bg-green-500 mx-2 text-xl py-2 font-bold text-white hover:bg-green-600 rounded-lg mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
