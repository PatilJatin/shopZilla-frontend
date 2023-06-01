
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-[70vh] bg-[#0f0429f1] text-white">
      <div className="container flex flex-col items-center gap-8 mx-auto h-full pt-10">
        <h2 className="text-5xl font-extrabold">404</h2>
        <h3 className="text-3xl font-bold">
          Oops! Looks like you took a wrong turn. Let's get you back on track!
        </h3>
        <NavLink
          to={"/"}
          className={
            "bg-blue-600 hover:bg-blue-700 px-3 py-1 text-lg font-semibold text-white rounded-md"
          }
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
