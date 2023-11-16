import { build, buildErrorMessage } from 'vite'
import {pay} from '../actions/mercadoPagoActions'
import { createReducer } from '@reduxjs/toolkit'
const initialState = {
    result: null,
}

export const mercadoPagoReducer = createReducer(initialState , (builder) => {
    builder
        .addCase(pay.fulfilled, (state, action) => {
            return {
                ...state,
                result: action.payload,
            }
        })
})