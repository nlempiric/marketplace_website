import { combineReducers } from "@reduxjs/toolkit";
import sidebarCheck from "../reducer/togglesidebar";
const rootReducer = combineReducers({ sidebar: sidebarCheck.reducer });
export default rootReducer;
