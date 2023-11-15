import React from "react";
import firstPic from "../images/Feature image.png";
import secondPic from "../images/Feature image (1).png";
import leftArrow from "../images/Specialties Left Arrow.svg";
import rightArrow from "../images/Specialties Right Arrow.svg";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

function Images() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center p-5 sm:p-10 gap-5">
        <img className="w-full sm:w-1/2" src={firstPic} alt="" />
        <img className="w-full sm:w-1/2" src={secondPic} alt="" />
      </div>
      <div className="flex items-center justify-between p-5">
        <img className="cursor-pointer" src={leftArrow} alt="" />
        <img className="cursor-pointer" src={rightArrow} alt="" />
      </div>
    </div>
  );
}

export default Images;
