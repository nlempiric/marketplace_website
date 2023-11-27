import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";
import { MainContext } from "../index";
import { MintTo } from "../utils/queries";
import { useNavigate } from "react-router-dom";
import Loader from "react-js-loader";
import { Hourglass } from "react-loader-spinner";
import BannerModel from "../utils/BannerModel";
const { utils } = require("ethers");

const MintNftPage = ({setchange}) => {
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();

  let { client } = useContext(MainContext);
  const [isLoading, setisLoading] = useState(false);
  const [isBannerOpen, setBannerOpen] = useState(false);
  const [message, setmessage] = useState("");
  const [fileName, setFileName] = useState("Choose a file");
  const [imagePreview, setImagePreview] = useState(null);
  const [Data, setData] = useState({
    price: null,
    name: null,
    description: null,
    _imgUrl: null,
  });

  const changeHandler = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
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

  const handleImangechange = (e) => {
    setData({
      ...Data,
      _imgUrl: URL.createObjectURL(e.target.files[0]),
      imgUrl: e.target.files[0],
    });
  };

  const handleMintNFT = async () => {
    console.log("dataaaaa", Data);

    if (
      Data.name != null &&
      Data.price > 0 &&
      Data.description != null &&
      Data._imgUrl != null
    ) {
      try {
        setisLoading(true);
        const weiValue = utils.parseEther(Data.price);
        console.log("Ether amounttttttttttttt", Number(weiValue));
        const imageFile = new File([Data.imgUrl], "nft.png", {
          type: "image/png",
        });
        console.log("Dataaaa", imageFile);
        const metaData = await client.store({
          name: Data.name,
          price: weiValue,
          description: Data.description,
          image: imageFile,
        });

        const imgurl1 = metaData.data.image.pathname;
        const i = imgurl1.replace("/nft.png", ".ipfs.dweb.link/nft.png");
        const url = i.replace("//", "https://");

        const cid = metaData.ipnft;

        const mintNft = await MintTo(
          Data.name,
          weiValue,
          Data.description,
          url,
          cid
        );

        setmessage("Nft Minted Successfully");
        setchange(true)
        console.log("logggg.................................", mintNft);
      } catch (err) {
        console.log("err in nft mint.................................", err);
        setmessage("Transaction Failed");
      } finally {
        setisLoading(false);
        setBannerOpen(true);
        console.log("finalllyyyyy");
        setData(prevData => ({
          ...prevData,
          price: null,
          name: null,
          description: null,
          _imgUrl: null,
        }));
      }
    } else {
      console.log("fill all the data");
    }
  };


  return (
    <>
      {isConnected ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
            className="box"
          >
            <div
              className={`container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex  justify-between gap-10 2xl:!flex-row xl:!flex-row lg:!flex-row py-16 flex-col-reverse ${
                isLoading ? "opacity-20" : ""
              }`}
            >
              <div className="2xl:w-1/2 xl:w-1/2  2xl:h-[500px] xl:h-[500px] lg:h-[500px] h-[400px] sm:h-[300px]  rounded-lg lg:w-1/2 flex justify-center items-center border border-1 border-gray-700">
                {Data._imgUrl ? (
                  <img
                    src={Data._imgUrl}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <p> + Upload Image</p>
                )}
              </div>
              <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2">
                <h1 className="text-4xl text-[#050515] text-center">
                  MINT NFT
                </h1>
                <div className="flex flex-col gap-8 py-10">
                  <input
                    type="text"
                    name="name"
                    value={Data.name || ''} 
                    placeholder="Name Your NFT"
                    onChange={changeHandler}
                    className="w-full px-3 py-3  bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
                  />
                  <input
                    type="number"
                    name="price"
                    value={Data.price || ''}
                    onChange={changeHandler}
                    placeholder="Price In Ether"
                    className="w-full py-3 px-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
                  />
                  <input
                    name="description"
                    value={Data.description || ''}
                    type="text"
                    onChange={changeHandler}
                    placeholder="Add Description"
                    className="w-full py-3 px-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
                  />
                  <label className="w-full relative cursor-pointer">
                    <input
                      className="hidden"
                      name="_imgUrl"
                      type="file"
                      id="fileInput"
                      onChange={handleImangechange}
                    />
                    <div className="w-full py-3 bg-gray-100  flex items-center justify-center border border-gray-100 hover:border-gray-400">
                      <span className="ml-2">{fileName}</span>
                    </div>
                  </label>

                  <button
                    className="px-10 py-3 bg-[#050515] border border-1 border-[#050515] text-white rounded-md hover:text-[#050515] hover:bg-transparent "
                    onClick={handleMintNFT}
                  >
                    Mint Nft
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        navigate("/")
      )}
      {isLoading ? (
        <div className="absolute top-[390px] mx-[45%]">
          <Loader
            loaded={isLoading}
            type="bubble-scale"
            bgColor={"#050515"}
            color={"#050515"}
          >
            Loading...
          </Loader>
        </div>
      ) : (
        ""
      )}
      {isBannerOpen && (
        <BannerModel
          isBannerOpen={isBannerOpen}
          setBannerOpen={setBannerOpen}
          message={message}
          navigate={"/MintNftPage"}
        />
      )}
    </>
  );
};

export default MintNftPage;
