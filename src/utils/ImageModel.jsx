import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ImageModel = ({ item, showImage, setshowImage }) => {
  console.log("gdngfjskhfbsdjjjjjjk")
  const modalRef = useRef(null);

  const handleClose = () => {
    setshowImage(false);
  };

  const handleBackgroundClick = (e) => {
    if (modalRef.current && e.target === modalRef.current){
      handleClose();
    }
  };

  console.log("items of image url",item)
  return (
    <>
      {showImage && (
        <div
          className="w-full fixed inset-0 flex items-center justify-center bg-opacity-95 bg-black z-20"
          onClick={handleBackgroundClick}
        >
          <div className="w-full h-full " ref={modalRef}>
            <div className="flex justify-end">
              <AiOutlineClose
                className="text-white text-2xl mx-2 my-1"
                onClick={handleClose}
              />
            </div>
            <div className="h-full flex justify-center items-center px-2">
              <img
                src={item}
                alt=""
                className="h-96 w-96 object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModel;
