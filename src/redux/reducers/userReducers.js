import { createReducer } from "@reduxjs/toolkit";
import { cargarUsuario, register, login, logout, signInWithToken , getUser} from '../actions/userActions'
const initialState = {
    user: null,
    token : null,
    error: null,
}
export const userReducer = createReducer( initialState, ( builder ) => {
    builder
        .addCase( cargarUsuario, ( stateActual, action ) => {
            return {
                ...stateActual,
                user : action.payload
             }
        } )
        .addCase( register.fulfilled, ( stateActual, action ) => {
            console.log(action)
            if(action.payload.status === 200){
                return {
                    ...stateActual,
                    user : action.payload.data.result.entityUser.bunisessName || null,
                    token : action.payload.data.result.entityUser.id || null,
                    error : null
                }
            }else{
                return {
                    ...stateActual,
                    user :  null,
                    token : null,
                    error : action.payload.data.status
                }
            }
            
            
        } )
        .addCase( login.fulfilled, (stateActual, action) => {
            console.log(action);
            
            if (action.payload.status === 200) {
                return {
                    ...stateActual,
                    user : action.payload.data.result.entityUser.bunisessName ,
                    token : action.payload.data.result.token,
                    error : null,
                }
            }else{
                return {
                    ...stateActual,
                    user : null,
                    token : null,
                    error : action.payload.data.status,
                }
            }
            
        })
        .addCase( signInWithToken.fulfilled, (stateActual, action) => {
            console.log(action)
            return {
                ...stateActual,
                user : action.payload.user,
                token :  action.payload.token
            }
        })
        .addCase( logout, (stateActual, action) => {
            return  {
                ...stateActual,
                user : null,
                token : null
            }
        })
        .addCase(getUser, (stateActual, action) =>{
            console.log(action);
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        })
    })