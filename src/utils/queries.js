import { Contract } from "./contractFunction";
export const MintTo = async (name, value, d, url, cid) => {
  try {
    const contractObj = await Contract();
    const data = await contractObj.mintTo(name, value, d, url, cid);
    console.log("dataaa", data);
    const receipt = await data.wait();
    return receipt;
  } catch (error) {
    console.log("error", error);
  }
};

export const totalSupply = async () => {
  try {
    const DataArray = [];
    const contractObj = await Contract();
    const tp = await contractObj.totalSupply();
    const totalsupplyinNumber = Number(tp._hex);
    for (let i = 0; i < totalsupplyinNumber; i++) {
      const tokenIds = await contractObj.tokenByIndex(i);
      const tokenidNumber = Number(tokenIds._hex);
      const nftListed = await contractObj.isNftListed(tokenidNumber);
      if (nftListed) {
        const data = await contractObj.getData(tokenidNumber);
        DataArray.push(data);
      }
    }
   
    return DataArray;
  } catch (error) {
    console.log("error", error);
  }
};
