import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "ToggleSidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleSidebar } = toggleSlice.actions;
export default toggleSlice;
