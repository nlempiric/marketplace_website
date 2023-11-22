import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataSlice from "../reducer/dataSlice";
import totalsupply from "../reducer/totalsupply";
import sidebarCheck from "../reducer/togglesidebar";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  sidebar: sidebarCheck.reducer,
  clikcedData: dataSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
    // data: dataSlice.reducer,
    // tsupply: totalsupply.reducer,
  },
});

const persistor = persistStore(store);

export { persistor };
