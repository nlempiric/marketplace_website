import React, { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import { MainContext } from "./index";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { useDispatch, useSelector } from "react-redux";
import { totalsupply } from "./redux/reducer/totalsupply";
import { totalSupply } from "./utils/queries";

function App() {
  const [loadingforExplore, setloadingforExplore] = useState(false);
  let { ncontract } = useContext(MainContext);
  const dispatch = useDispatch();
  const [nftDetail, setnftDetails] = useState([]);
  useEffect(() => {
    const getTotalData = async () => {
      setloadingforExplore(true);
      const ts = await totalSupply();
      setnftDetails(ts);
      dispatch(totalsupply(ts));
      setloadingforExplore(false);
    };

    getTotalData();
  }, []);


  return (
    <>
      <Layout>
        <AllRoutes
          loadingforExplore={loadingforExplore}
          nftDetail={nftDetail}
          setnftDetails={setnftDetails}
        />
      </Layout>
    </>
  );
}

export default App;
