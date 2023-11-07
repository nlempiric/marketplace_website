import React from "react";

const Heading = ({ headingName }) => {
  return (
    <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 py-14 flex justify-center mb-10">
      <h1 className="text-[35px] 2xl:text-[65px] xl:text-[60px] lg:text-[58px] md:text-[55px] sm:text-[30px] font-medium ">
        {headingName}
      </h1>
    </div>
  );
};

export default Heading;
