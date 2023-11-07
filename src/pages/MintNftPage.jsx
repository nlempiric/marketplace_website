import React, { useState } from "react";

const MintNftPage = () => {
  const [fileName, setFileName] = useState("Choose a file");
  const [imagePreview, setImagePreview] = useState(null);

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

  return (
    <>
      <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex  justify-between gap-10 2xl:!flex-row xl:!flex-row lg:!flex-row py-16 flex-col-reverse">
      <div className="2xl:w-1/2 xl:w-1/2  2xl:h-[500px] xl:h-[500px] lg:h-[500px] h-[400px] sm:h-[300px]  rounded-lg lg:w-1/2 flex justify-center items-center border border-1 border-gray-700">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <p> + Upload Image</p>
          )}
        </div>
        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2">
          <h1 className="text-4xl text-[#050515] text-center">MINT NFT</h1>
          <div className="flex flex-col gap-8 py-10">
            <input
              type="text"
              placeholder="Name Your NFT"
              className="w-full py-3 placeholder:px-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
            />
            <input
              type="number"
              placeholder="Price In Gwei"
              className="w-full py-3 placeholder:px-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
            />
            <input
              type="text"
              placeholder="Add Description"
              className="w-full py-3 placeholder:px-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
            />
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
              Mint Nft
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintNftPage;
