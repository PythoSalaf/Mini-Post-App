import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[60px] bg-white flex items-center fixed top-0 z-10">
      <div className="w-[95%] lg:w-[90%] mx-auto  flex items-center justify-between">
        <Link to="/">
          <h3 className="text-primary text-[22px] md:text-2xl lg:text-3xl uppercase font-semibold lg:font-bold">
            Post<span className="text-black ">App</span>
          </h3>
        </Link>
        <div className="">
          <button
            onClick={() => navigate("/")}
            className=" border-primary text-black border px-5 py-1 rounded-xl text-base md:text-lg uppercase hover:bg-primary hover:text-secondary  font-sans font-semibold"
          >
            see post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
