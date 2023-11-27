import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Aboutpage from "../pages/Aboutpage";
import BlogPage from "../pages/BlogPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import MintNftPage from "../pages/MintNftPage";
import TransferNft from "../pages/TransferNft";
import UpdateNft from "../pages/UpdateNft";
import MyCollection from "../pages/MyCollection";
import NftDetails from "../pages/NftDetails";
import AllNftPage from "../pages/AllNftPage";

function AllRoutes({change,setchange,filteredAddress,nftDetail,setnftDetails,loadingforExplore}) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage nftDetail={nftDetail} loadingforExplore={loadingforExplore} setnftDetails={setnftDetails}/>} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path={`/blog/:id`} element={<BlogDetailPage />} />
        <Route path="/MintNftPage" element={<MintNftPage setchange={setchange} />} />
        <Route path="/nfts/details/TransferNft/:id" element={<TransferNft />} />
        <Route path="/nfts/details/UpdateNft" element={<UpdateNft setchange={setchange}/>} />
        <Route path="/MyCollection" element={<MyCollection nftDetail={nftDetail} loadingforExplore={loadingforExplore} setnftDetails={setnftDetails} />} />
        <Route path="/nfts/details/" element={<NftDetails change={change} setchange={setchange} filteredAddress={filteredAddress} nftDetail={nftDetail}/>} />
        <Route path="/AllNftPage" element={<AllNftPage nftDetail={nftDetail} loadingforExplore={loadingforExplore} setnftDetails={setnftDetails}/>} />
      </Routes>
    </>
  );
}

export default AllRoutes;
