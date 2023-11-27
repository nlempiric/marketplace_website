import { ethers } from "ethers";
import { Contract } from "./contractFunction";
export const MintTo = async (name, value, d, url, cid) => {
  // try {
  const contractObj = await Contract();
  const data = await contractObj.mintTo(name, value, d, url, cid);
  console.log("dataaa", data);
  const receipt = await data.wait();
  return receipt;
  // } catch (error) {
  //   console.log("error", error);
  // }
};

// export const totalSupply = async () => {
//   try {
//     const DataArray = [];
//     const contractObj = await Contract();
//     const tp = await contractObj.totalSupply();
//     const totalsupplyinNumber = Number(tp._hex);
//     for (let i = 0; i < totalsupplyinNumber; i++) {
//       const tokenIds = await contractObj.tokenByIndex(i);
//       const tokenidNumber = Number(tokenIds._hex);
//       const nftListed = await contractObj.isNftListed(tokenidNumber);
//       if (nftListed) {
//         const data = await contractObj.getData(tokenidNumber);
//         DataArray.push({
//           ...data,
//           tokenId:Number(data.tokenId._hex),
//           price: ethers.utils.formatEther(data.price._hex),
//         });
//       }
//     }

//     return DataArray;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

export const collection = async () => {
  try {
    const DataArray = [];
    const contractObj = await Contract();
    const tp = await contractObj.totalSupply();
    const totalsupplyinNumber = Number(tp._hex);
    for (let i = 0; i < totalsupplyinNumber; i++) {
      const tokenIds = await contractObj.tokenByIndex(i);
      const tokenidNumber = Number(tokenIds._hex);
      const nftListed = await contractObj.isNftListed(tokenidNumber);
      const data = await contractObj.getData(tokenidNumber);
      // DataArray.push({ isListed, data });

      DataArray.push({
        ...data,
        nftListed,
        tokenId: Number(data.tokenId._hex),
        price: ethers.utils.formatEther(data.price._hex),
      });
    }

    return DataArray;
  } catch (error) {
    console.log("error", error);
  }
};

export const updateNft = async (tid, name, price, description, url, cid) => {
  const contractObj = await Contract();
  const updateData = await contractObj.Update(
    tid,
    name,
    price,
    description,
    url,
    cid
  );
  const up = await updateData.wait();
  console.log("update dataaaaa ", up);
  return up;
};

export const transferNft = async (address, toAdd, tokenId) => {
  const contractObj = await Contract();
  const transfer = await contractObj.transferFrom(address, toAdd, tokenId);
  return transfer;
};
export const buyNft = async (tokenId, price) => {
  const contractObj = await Contract();
  const buy = await contractObj.buyNft(tokenId, price);
  const buywait = await buy.wait();
  return buywait;
};
export const removeNft = async (address, tokenId) => {
  const contractObj = await Contract();
  const remove = await contractObj.removeSell(address, tokenId);
  const removewait = await remove.wait();
  return removewait;
};
export const sellNft = async (tokenId) => {
  const contractObj = await Contract();
  const sell = await contractObj.selldata(tokenId);
  const sellwait = await sell.wait();
  return sellwait;
};
