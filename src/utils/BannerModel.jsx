import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BannerModel = ({ navigate, isBannerOpen, message, setBannerOpen }) => {
  const navigateTo = useNavigate();
  console.log("first", navigate);
  useEffect(() => {
    setTimeout(() => {
      setBannerOpen(false);
      navigateTo(navigate);
    }, 3000);
  }, []);

  return (
    <div className="w-full fixed inset-0 flex items-center justify-center bg-opacity-60 bg-black z-20 p-5">
      <div className="w-[500px] py-20 bg-white flex flex-col">
        <h1 className="text-[#050515] text-center">{message}</h1>
      </div>
    </div>
  );
};

export default BannerModel;
