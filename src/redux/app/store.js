import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/index";
import dataSlice from "../reducer/dataSlice"; // Make sure to import the dataSlice correctly

const store = configureStore({
  reducer: {
    root: rootReducer,
    data: dataSlice.reducer, // Add the dataSlice reducer to the store under the 'data' key
  },
});

export default store;
