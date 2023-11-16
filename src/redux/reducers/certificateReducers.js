import { buildCertificate } from "../../services/certificateService";
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    reslult: null
}


export const certificateReducers = createReducer( initialState, ( builder ) =>{
    builder
        .addCase( buildCertificate.fulfilled, ( stateActual, action ) => {
            console.log(action);
            return {
                ...stateActual,
                reslult: action.payload

            }
        })
})