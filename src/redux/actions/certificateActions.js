import certificateService from "../../services/certificateService";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";


export const buildCertificate = createAsyncThunk('build_certificate' , async (body) => {
    return await certificateService.buildCertificate(body);
})