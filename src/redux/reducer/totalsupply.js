import { createSlice } from "@reduxjs/toolkit";

const TotalSupply = createSlice({
  name: "totalsupply",
  initialState: {
    data:[]
  },
  reducers: {
    totalsupply: (state, action) => {
      console.log("data payload", action.payload);
      // state.data = action.payload;
      state.data.push(action.payload)
    },
  },
});

export const { totalsupply } = TotalSupply.actions; 
export default TotalSupply;
