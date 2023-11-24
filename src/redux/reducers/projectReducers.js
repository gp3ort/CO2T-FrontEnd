import { createReducer } from "@reduxjs/toolkit";
import { filterProjects, getAllProjects, getProjectById } from "../actions/projectActions";

const initialState = {
    allProjects : [],
    project: null,
}

export const projectsReducer = createReducer(initialState, (builder) =>{
    builder
        .addCase(getAllProjects.fulfilled, (state, action) => {
            
            return {
                ...state,
                allProjects: action.payload.result,
            }
        })
        .addCase(getProjectById.fulfilled, (state, action) =>{
            return {
                ...state,
                project: action.payload.result,
            }
        })
        .addCase(filterProjects.fulfilled, (state, action) =>{
            return {
                ...state,
                allProjects: action.payload.result,
            }
        })
})