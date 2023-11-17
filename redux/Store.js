import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import {AdminNavReducer} from '../utils/AdminNavSlice'
import {AdminReducer} from '../utils/AdminSlice'
import thunk from 'redux-thunk';
import { CartReducer } from "@/utils/CartSlice";

export const store = configureStore({
  reducer: {userReducer, AdminNav: AdminNavReducer, Admin: AdminReducer, Cart: CartReducer},
  devTools: true,
  middleware: [thunk]
});