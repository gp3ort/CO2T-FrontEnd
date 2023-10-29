import projectService from '../../services/projectService';
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAllProjects = createAsyncThunk( 'get_all_project_async', async () => {
    return await projectService.getAllProjects();
})

export const getProjectById = createAsyncThunk( 'get_project_by_id_async', async (id) => {
    return await projectService.getProjectById(id);
})
