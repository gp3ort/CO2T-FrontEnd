import mercadoPagoService from "../../services/mercadoPagoService"
import { createAsyncThunk } from "@reduxjs/toolkit";


export const pay = createAsyncThunk( 'pay', async (body) => {
    return await mercadoPagoService.onSubmit(body);
})