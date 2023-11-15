import React from "react";

function Button() {
  return (
    <div className="flex gap-5 mt-3">
      <button className="bg-purple-700 btn text-emerald-950">
        See My Resume
      </button>
      <button className="btn shadow shadow-black text-emerald-950 ml-2 border-purple-500 md:border-2 hover:bg-purple-600 hover:text-white transition ease-out duration-500 border-dotted">
        15 Minute Meeting
      </button>
    </div>
  );
}

export default Button;
