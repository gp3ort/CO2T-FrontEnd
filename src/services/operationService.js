import axios from "axios";

const operationQuery = axios.create({
    baseURL: import.meta.env.VITE_PATH  +  '/api/Operations',
})

export const addToCart = async (body) =>{
    try{
        console.log(body);
        const request = await operationQuery.post("/addToCart",body)
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
        const request = await operationQuery.post("/processCart",body)
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
        const request = await operationQuery.post("/cancelCart",body)
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