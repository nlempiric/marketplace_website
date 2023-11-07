import React, { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import { useSelector } from "react-redux";

const TransferNft = () => {
  const [fileName, setFileName] = useState("Choose a file");
  const [imagePreview, setImagePreview] = useState(null);
  const [isDropdownAddressOpen, setDropdownAddressOpen] = useState(false);
  const [isDropdownIdOpen, setDropdownIdOpen] = useState(false);
  const [selectedAddress, setselectedAddress] = useState("Select Address");
  const [selectedId, setselectedId] = useState("Select Id");
  const { id } = useParams();
  const { data } = useSelector((state) => state.data);
  console.log("trandsfefrer", data);

  const toggleDropdownforAddress = () => {
    setDropdownAddressOpen(!isDropdownAddressOpen);
  };
  const toggleDropdownforId = () => {
    setDropdownIdOpen(!isDropdownIdOpen);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFileName("Choose a file");
      setImagePreview(null);
    }
  };

  const handleselectAddress = (optionValue) => {
    setselectedAddress(optionValue);
    setDropdownAddressOpen(false);
  };
  const handleselectId = (optionValue) => {
    setselectedId(optionValue);
    setDropdownIdOpen(false);
  };

  return (
    <>
      <div className="container h-full mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex  justify-between gap-6 2xl:!flex-row xl:!flex-row lg:!flex-row py-16 flex-col-reverse">
        <div className="2xl:w-1/2 xl:w-1/2  2xl:h-[430px] xl:h-[430px] lg:h-[480px] h-[400px] sm:h-[300px]  rounded-lg lg:w-1/2 flex justify-center items-center border border-1 border-gray-700">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt=""
              className="w-full h-full object-fill rounded-lg"
            />
          ) : (
            <p> + Upload Image</p>
          )}
        </div>
        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2">
          <h1 className="text-4xl text-[#050515] text-center">TRANSFER NFT</h1>
          <div className="flex flex-col gap-8 py-10">
            <div className="relative inline-block">
              <input
                type="text"
                className="w-full py-3 px-3 cursor-pointer bg-gray-100 border border-gray-100 outline-none focus:border-gray-400 rounded"
                onClick={toggleDropdownforAddress}
                // onBlur={toggleDropdown}
                value={selectedAddress}
                readOnly
              />
              <PiCaretDownBold
                onClick={toggleDropdownforAddress}
                className="absolute top-4 right-4 cursor-pointer"
              />
              {isDropdownAddressOpen && (
                <div className="absolute z-10 mt-2 py-2 bg-white border border-t-0 rounded-b w-full">
                  {/* <div
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("")}
                  >
                    Select a option
                  </div> */}
                  <div
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleselectAddress(" Option 1")}
                  >
                    Option 1
                  </div>
                  <div
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleselectAddress("  Option 2")}
                  >
                    Option 2
                  </div>
                  <div
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleselectAddress("Option 3")}
                  >
                    Option 3
                  </div>
                </div>
              )}
            </div>
            <div className="relative inline-block">
              <input
                type="text"
                className="w-full py-3 px-3 cursor-pointer bg-gray-100 border border-gray-100 outline-none focus:border-gray-400 rounded"
                onClick={toggleDropdownforId}
                // onBlur={toggleDropdown}
                value={selectedId}
                readOnly
              />
              <PiCaretDownBold
                onClick={toggleDropdownforId}
                className="absolute top-4 right-4 cursor-pointer"
              />
              {isDropdownIdOpen && (
                <div className="absolute z-10 mt-2 py-2 bg-white border border-t-0 rounded-b w-full">
                  {/* <div
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("")}
                  >
                    Select a option
                  </div> */}
                  <div
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleselectId(" Option 1")}
                  >
                    Option 1
                  </div>
                  <div
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleselectId("  Option 2")}
                  >
                    Option 2
                  </div>
                  <div
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleselectId("Option 3")}
                  >
                    Option 3
                  </div>
                </div>
              )}
            </div>

            <label className="w-full relative cursor-pointer">
              <input
                className="hidden"
                name="_imgUrl"
                type="file"
                id="fileInput"
                onChange={handleFileChange}
              />
              <div className="w-full py-3 bg-gray-100  flex items-center justify-center border border-gray-100 hover:border-gray-400">
                <span className="ml-2">{fileName}</span>
              </div>
            </label>

            <button className="px-10 py-3 bg-[#050515] border border-1 border-[#050515] text-white rounded-md hover:text-[#050515] hover:bg-transparent ">
              Transfer Nft
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferNft;
