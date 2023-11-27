import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MainContext } from "../index";
import { updateNft } from "../utils/queries";
import Loader from "react-js-loader";
import { ethers } from "ethers";
import BannerModel from "../utils/BannerModel";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

const UpdateNft = ({setchange}) => {
  const { address, isConnected } = useAccount();
  let { client } = useContext(MainContext);
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("Choose a file");
  const dispatch = useDispatch();
  const { idata } = useSelector((state) => state.root.clikcedData);
  const [isLoading, setIsLoading] = useState(false);
  const [imageChanged, setimageChanged] = useState(false);
  const [message, setmessage] = useState("");
  const [isBannerOpen, setBannerOpen] = useState(false);

  const tid = idata.tokenId;
  const [Data, setData] = useState({
    price: idata.price,
    name: idata.name,
    description: idata.desc,
    _imgUrl: idata.tokenUri,
  });

  const handleFileChange = (e) => {
    setData({
      ...Data,
      _imgUrl: URL.createObjectURL(e.target.files[0]),
      imgUrl: e.target.files[0],
    });
    setimageChanged(true);
  };

  const handleChangeinput = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  async function fetchImageAsBlob(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  }
  const handleUpdate = async () => {
    if (
      Data.name != "" &&
      Data.price > 0 &&
      Data.description != "" &&
      Data.img != ""
    ) {
      try {
        setIsLoading(true);
        console.log("dataaa updateeeee", Data);
        console.log("tid", tid);

        var imageFile;
        if (imageChanged) {
          imageFile = new File([Data.imgUrl], "nft.png", { type: "image/png" });
          console.log("imageFileee", imageFile);
        } else {
          const data1 = await fetchImageAsBlob(Data._imgUrl);
          imageFile = new File([data1], "nft.png", { type: "image/jpeg" });
        }
        const weiValue = ethers.utils.parseEther(Data.price);

        const metaData = await client.store({
          name: Data.name,
          price: weiValue,
          description: Data.description,
          image: imageFile,
        });

        console.log("metadtaaaaa", metaData);
        const imgurl1 = metaData.data.image.pathname;
        const i = imgurl1.replace("/nft.png", ".ipfs.dweb.link/nft.png");
        const url = i.replace("//", "https://");

        const cid = metaData.ipnft;

        const update = await updateNft(
          tid,
          Data.name,
          weiValue,
          Data.description,
          url,
          cid
        );
        setmessage("Nft Updated Successfully");
        setchange(true)

      } catch (err) {
        setmessage("Transaction Failed");
      } finally {
        setIsLoading(false);
        setBannerOpen(true);
        setData((prevData) => ({
          ...prevData,
          price: null,
          name: null,
          description: null,
          _imgUrl: null,
        }));
        
      }
    } else {
      console.log("Fill The Data To update");
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
              className={`container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex  justify-between gap-10 2xl:!flex-row xl:!flex-row lg:!flex-row py-16 sm:py-10 flex-col ${
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
                  UPDATE NFT
                </h1>
                <div className="flex flex-col gap-8 py-10">
                  <input
                    type="text"
                    placeholder="Name Your NFT"
                    value={Data.name || ""}
                    name="name"
                    onChange={handleChangeinput}
                    className="w-full px-3 py-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
                  />
                  <input
                    type="number"
                    placeholder="Price In Gwei"
                    value={Data.price || ""}
                    name="price"
                    onChange={handleChangeinput}
                    className="w-full px-3 py-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
                  />
                  <textarea
                    type="text"
                    placeholder="Add Description"
                    value={Data.description || ""}
                    name="description"
                    onChange={handleChangeinput}
                    className="w-full py-3 px-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
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

                  <button
                    className="px-10 py-3 bg-[#050515] border border-1 border-[#050515] text-white rounded-md hover:text-[#050515] hover:bg-transparent "
                    onClick={handleUpdate}
                  >
                    Update Nft
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
          navigate="/nfts/details"
        />
      )}
    </>
  );
};

export default UpdateNft;
