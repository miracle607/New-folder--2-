import React from "react";
import arrow from "../images/ArrowRight.svg";
import Images from "./images";

function ShowCase() {
  return (
    <div className="custom-gradient h-full w-full flex flex-col">
      <span className="flex flex-col md:flex-row justify-between p-5">
        <p className="text-2xl md:text-3xl text-emerald-950 mb-2 md:mb-0">
          Showcase
        </p>
        <span className="flex items-center border-b-black text-emerald-950 mt-2 md:mt-0">
          <p className="text-sm md:text-base">See All</p>
          <img src={arrow} alt="" className="ml-1" />
        </span>
      </span>
      <div>
        <Images />
      </div>
    </div>
  );
}

export default ShowCase;
