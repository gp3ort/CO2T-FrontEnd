import { createReducer } from "@reduxjs/toolkit";
import { cargarUsuario, register, login, logout } from '../actions/userActions'
const initialState = {
    user: null,
    token : null
}
export const userReducer = createReducer( initialState, ( builder ) => 
    builder
        .addCase( cargarUsuario, ( stateActual, action ) => {
            return {
                ...stateActual,
                user : action.payload
             }
        } )
        .addCase( register.fulfilled, ( stateActual, action ) => {
            let userData = {
                user : action.payload.user || null,
                token : action.payload.token || null
            }
            return {
                ...stateActual,
                ...userData
            }
        } )
        .addCase( login.fulfilled, (stateActual, action) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        }  )
/*         .addCase( signInWithToken.fulfilled, (stateActual, action) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        } ) */
        .addCase( logout, (stateActual, action) => {
            return  {
                ...stateActual,
                user : null,
                token : null
            }
        } )
)