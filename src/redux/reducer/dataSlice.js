import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "detail",
  initialState: {
    idata: [],
  },
  reducers: {
    getData: (state, action) => {
      state.idata = action.payload;
    },
  },
});

export const { getData } = DataSlice.actions;
export default DataSlice;
