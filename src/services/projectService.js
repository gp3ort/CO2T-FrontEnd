import axios from "axios";

const projectQuery = axios.create({
    baseURL: import.meta.env.VITE_PATH  + '/api/Project',
})

export const getAllProjects = async () =>{
    try{
        const request = await projectQuery.get("/getAllProjects")
        return request.data
    }catch(error){
        console.log(error);
        return error.response
    }
}

export const getProjectById = async (id) =>{
    try{
        const request = await projectQuery.get(`/getProject?id=${id}`)
        return request.data;
    }catch(error){
        console.log(error);
        return error.response
    }
}

export const filterProjects = async (filterSelected) =>{
    try{
        const body = {
            filter: filterSelected
        }
        console.log(body);
        const request = await projectQuery.post("/filterProjects",body)
        return request.data;
    }catch(error){
        console.log(error);
        return error.response
    }
}

export default {
    getAllProjects,
    getProjectById,
    filterProjects
}