import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import jwtDecode from "jwt-decode";


export const cargarUsuario = createAction( 'cargar_usuario', (user) => {
    return {
        payload : user
    }
} )

export const register = createAsyncThunk( "register", async ( body ) => {
        return await authService.register(body)
} )

export const login = createAsyncThunk( "logear", async ( body ) => {
    return await authService.login(body)
} )


export const signInWithToken = createAsyncThunk( "logear_token", async (  ) => {
        const token = localStorage.getItem("miToken"); 
        console.log("token", token);
        try {
            const decodedToken = jwtDecode(token);
            const userRole = decodedToken.role;
            const username = decodedToken.unique_name;
            const currentTimestamp = Math.floor(Date.now() / 1000);
        
            if (decodedToken.exp < currentTimestamp) {
              throw new Error("El token ha expirado");
            }

            return{
                user : username,
                token : token
            }
            
          } catch (error) {
            console.log(error);
          }
} )


export const logout = createAction( "reset", () => {
        localStorage.clear();
        return {
            payload : null
        }
} )