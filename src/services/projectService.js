import axios from "axios";

const authQuery = axios.create({
    baseURL: 'https://localhost:7179/api/Project',
})

export const getAllProjects = async () =>{
    try{
        const request = await authQuery.get("/getAllProjects")
        console.log(request);
        return request.data
    }catch(error){
        console.log(error);
        return error.response
    }
}

export const getProjectById = async (id) =>{
    try{
        console.log(id);
        const request = await authQuery.get(`/getProject?id=${id}`)
        console.log(request);
        return request.data;
    }catch(error){
        console.log(error);
        return error.response
    }
}

export default {
    getAllProjects,
    getProjectById
}