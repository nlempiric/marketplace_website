import React from "react";

function Para({ text, setShowText, showText }) {
  return (
    <>
      <div className="bg-[#F8F8FF] p-5 rounded-md overflow-y-auto ">
        <h2 className="text-[20px]">Description</h2>
        <p className="">
          {text?.substring(0, 100)}
          {!showText && <span>......</span>}

          {showText && text?.substring(100)}
        </p>
        <button
          className="text-blue-800 mt-2 rounded-lg"
          onClick={() => setShowText(!showText)}
        >
          {showText ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}

export default Para;
