import React from "react";
import { FaEthereum } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { data } from "../utils/data";

const MyCollection = () => {
  return (
    <>
      <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 min-h-[100vh] h-full py-10 ">
        <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  gap-10">
          {data.map((items) => (
            <Link to={`/nfts/details/${items.id}`}>
              <div className="justify-self-center border border-1 border-gray-400 bg-white p-4 flex flex-col justify-center items-center rounded-md">
                <div>
                  <img src={items.imageUrl} alt="" />
                </div>
                <div className="pt-1 flex flex-col w-full px-2 2xl:text-start xl:text-start lg:text-start md:text-start text-center">
                  <h2 className="text-[22px] ">{items.name}</h2>
                  <h3 className="text-[20px] flex items-center justify-center 2xl:justify-start xl:justify-start lg:justify-start md:justify-start">
                    <span>
                      <FaEthereum />
                    </span>
                    <span>{items.price} ETH</span>
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>{" "}
    </>
  );
};

export default MyCollection;
