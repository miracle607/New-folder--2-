import React from "react";
import circle from "../images/Ellipse 8 (1).svg";
import tomas from "../images/tomas-profile.png";
import Button from "./button";

function Info() {
  return (
    <div className="info flex justify-center items-center p-10 flex-col md:flex-row">
      <div className="flex flex-col items-center md:items-start md:w-1/2 md:pr-10">
        <span className="flex items-center mb-3">
          <img src={circle} alt="" className="mr-2" />
          <p className="text-sm text-emerald-950">
            Available for remote work. Let’s talk!
          </p>
        </span>
        <h1 className="font-serif text-4xl font-extralight text-center md:text-left mb-3 md:w-full">
          Hello, I’m Tomas, a Webflow Developer
        </h1>
        <p className="text-emerald-950 text-xs text-center md:text-left mb-3 md:w-full">
          More than 8 years of experience building high-quality products and web
          applications with Webflow.
        </p>
        <Button />
      </div>
      <div className="md:w-1/2">
        <img src={tomas} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Info;
