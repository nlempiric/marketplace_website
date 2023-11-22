import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { ethers } from "ethers";
import abi from "./NFT.json";
import { NFTStorage, File, Blob } from "nft.storage";
import { BrowserRouter } from "react-router-dom";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/app/store";
// import { store, persistor } from "@/redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

const chains1 = [mainnet];
const projectId = "efc7f3f2e52f6d9fcceaaeeee2283265";
const { publicClient } = configureChains(chains1, [w3mProvider({ projectId })]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains1 }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains1);

const NFT_STORAGE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgzNDc0ODYwOTY2ZmQ3NzFGQ0ExNThhNmU2M0M5Y0UyNjgxOUREOUEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5NjI0NTQ3MTM5MywibmFtZSI6Ik5GVFNUT1JBR0UifQ.8hg1Lem_QnZ-rtXN3gZHPc_RAyAQq0iyOojHssowpu4";
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

export const MainContext = createContext();

root.render(
  <WagmiConfig config={wagmiConfig}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainContext.Provider value={{ client }}>
          <BrowserRouter>
            <App />
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          </BrowserRouter>
        </MainContext.Provider>{" "}
      </PersistGate>
    </Provider>
  </WagmiConfig>
);

reportWebVitals();
