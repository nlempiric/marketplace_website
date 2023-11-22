import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";
import { MainContext } from "../index";
import { MintTo } from "../utils/queries";
const { utils } = require("ethers");

const MintNftPage = () => {
  const { address, isConnected } = useAccount();
  let { client, ncontract } = useContext(MainContext);
  const [fileName, setFileName] = useState("Choose a file");
  const [imagePreview, setImagePreview] = useState(null);
  const [Data, setData] = useState({
    price: null,
    name: null,
    description: null,
    _imgUrl: null,
    // MetaDataURi: null,
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
    // console.log("adress",address)
    console.log("dataaaaa", Data);

    if (
      Data.name != null &&
      Data.price > 0 &&
      Data.description != null &&
      Data._imgUrl != null
    ) {
      try {
        // setIsLoading(true);
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
        console.log("logggg",mintNft)
        //   Data.name,
        //   weiValue,
        //   Data.description,
        //   url,
        //   cid
        // );
        // const d = await mintNft.wait();

        // const tokenid = mintNft.events[0].args.tokenId._hex;
        // const tokenIdNumber = Number(tokenid);
        // console.log("tokenid", tokenIdNumber);
        // setMinted(true);
        // toast.success("Minted successfully")
      } catch (err) {
        console.log(err);

        // toast.error("Transaction")
      } finally {
        setData({
          ...Data,
          price: null,
          name: null,
          description: null,
          _imgUrl: null,
          MetaDataURi: null,
        });

        // setIsLoading(false);
      }
    } else {
      console.log("fill all the data");
      // toast.warning('Please fill all the fields')
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.9 }}
        className="box"
      >
        <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex  justify-between gap-10 2xl:!flex-row xl:!flex-row lg:!flex-row py-16 flex-col-reverse">
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
            <h1 className="text-4xl text-[#050515] text-center">MINT NFT</h1>
            <div className="flex flex-col gap-8 py-10">
              <input
                type="text"
                name="name"
                placeholder="Name Your NFT"
                onChange={changeHandler}
                className="w-full py-3 placeholder:px-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
              />
              <input
                type="number"
                name="price"
                onChange={changeHandler}
                placeholder="Price In Gwei"
                className="w-full py-3 placeholder:px-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
              />
              <input
                name="description"
                type="text"
                onChange={changeHandler}
                placeholder="Add Description"
                className="w-full py-3 placeholder:px-3 bg-gray-100 border border-1 border-gray-100  outline-none focus:border-gray-400"
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
  );
};

export default MintNftPage;
