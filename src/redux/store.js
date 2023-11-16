import { projectsReducer } from "./reducers/projectReducers";
import { userReducer } from "./reducers/userReducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        user: userReducer,
    } 
})