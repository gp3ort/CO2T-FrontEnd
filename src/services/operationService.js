import axios from "axios";

const authQuery = axios.create({
    baseURL: 'https://localhost:7179/api/Operations',
})

export const addToCart = async (body) =>{
    try{
        console.log(body);
        const request = await authQuery.post("/addToCart",body)
        console.log(request);
        return request.data
    }catch(error){
        console.log(error);
        return error.response
    }
}

export const processCart = async (body) =>{
    try{
        console.log(body);
        const request = await authQuery.post("/processCart",body)
        console.log(request);
        return request.data
    }catch(error){
        console.log(error);
        return error.response
    }
}

export const cancelCart = async (body) =>{
    try{
        console.log(body);
        const request = await authQuery.post("/cancelCart",body)
        console.log(request);
        return request.data
    }catch(error){
        console.log(error);
        return error.response
    }
}
export default {
    addToCart,
    processCart,
    cancelCart
}