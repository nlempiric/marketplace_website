import abi from "../NFT.json";
import { ethers } from "ethers";

export const Contract = async () => {
  try {
    const providers = new ethers.providers.Web3Provider(window.ethereum);
    const signer = providers.getSigner();
    const contractAddress = "0xE8BE95E51695dfb318d89AE5bDF86c77425FeEEf";
    const contractAbi = abi.abi;
    const ncontract = new ethers.Contract(contractAddress, contractAbi, signer);
    return ncontract;
  } catch (err) {
    console.log("error in ", err);
  }
};
export const ProviderContract = async () => {
  try {
    const providers = new ethers.providers.Web3Provider(window.ethereum);

    return providers;
  } catch (err) {
    console.log("error in ", err);
  }
};
