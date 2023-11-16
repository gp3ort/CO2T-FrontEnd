import { projectsReducer } from "./reducers/projectReducers";
import { userReducer } from "./reducers/userReducers";
import { certificateReducers } from "./reducers/certificateReducers";
import {operationReducer} from './reducers/operationReducers'
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        user: userReducer,
        certificate: certificateReducers,
        operation: operationReducer,
    } 
})