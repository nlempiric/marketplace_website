import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { useDispatch } from "react-redux";
import { totalsupply } from "./redux/reducer/totalsupply";
import { collection } from "./utils/queries";
import { ProviderContract } from "./utils/contractFunction";
import { useAccount } from "wagmi";

function App() {
  const { address } = useAccount();
  const [loadingforExplore, setloadingforExplore] = useState(false);
  const [allAccounts, setallAccounts] = useState([]);
  const [filteredAddress, setfilteredAddress] = useState([]);
  const dispatch = useDispatch();
  const [nftDetail, setnftDetails] = useState([]);
  const [change, setchange] = useState(false);

  useEffect(() => {
    const collectionData = async () => {
      setloadingforExplore(true);
      const cl = await collection();
      setnftDetails(cl);
      dispatch(totalsupply(cl));
      setloadingforExplore(false);
    };
    setchange(false);
    collectionData();
  }, [change, address]);

  const handleConnect = async () => {
    try {
      const providers = await ProviderContract();
      providers
        .listAccounts()
        .then((accounts) => {
          setallAccounts(accounts);

          const cleanAddress = (address) =>
            address ? address.trim().toLowerCase() : "";

          const cleanAccounts = accounts.map(cleanAddress);
          const cleanTargetAddress = cleanAddress(address);

          const fa = cleanAccounts.filter(
            (cleanedAddress) => cleanedAddress !== cleanTargetAddress
          );
          setfilteredAddress(fa);
        })
        .catch((error) => {
          console.error("Error fetching MetaMask accounts:", error);
        });
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  useEffect(() => {
    handleConnect();
  }, [address]);

  return (
    <>
      <Layout>
        <AllRoutes
          change={change}
          loadingforExplore={loadingforExplore}
          nftDetail={nftDetail}
          setnftDetails={setnftDetails}
          filteredAddress={filteredAddress}
          setchange={setchange}
        />
      </Layout>
    </>
  );
}

export default App;
