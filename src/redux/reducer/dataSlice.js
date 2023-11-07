import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "detail",
  initialState: {
    data: "",
  },
  reducers: {
    getData: (state, action) => {
      console.log("erf5tewer", action.payload);
      state.data = action.payload;
    },
  },
});

export const { getData } = DataSlice.actions; 
export default DataSlice;
