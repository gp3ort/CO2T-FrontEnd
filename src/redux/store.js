import { userReducer } from "./reducers/userReducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: userReducer,
    } 
})