import operationService from "../../services/operationService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk( 'add_cart', async (body) => {
    return await operationService.addToCart(body);
})


export const processCart = createAsyncThunk( 'process_cart', async (body) => {
    return await operationService.processCart(body);
})
