import { addToCart , processCart} from "../actions/operationActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    result: null,
}

export const operationReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addToCart.fulfilled, (state, action) => {
            console.log(action);
            return{
                ...state,
                result: action.payload
            }
            
        })
        .addCase(processCart.fulfilled, (state, action)   =>  {
            console.log(action);
            return{
                ...state,
                result: action.payload
            }
        })
        .addCase(processCart.fulfilled, (state, action)   =>{
            return {
                ...state,
                result : action.payload
            }
        })
})

