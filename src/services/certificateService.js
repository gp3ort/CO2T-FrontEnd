import axios from "axios"

const certificateQuery = axios.create({
    baseURL: import.meta.env.VITE_PATH  + '/Certificate',
})

export const buildCertificate = async (body) =>{
    try{
        const request = await certificateQuery.post("/buildCertificate",body)
        console.log(request);
        return request
    }catch(error){
        console.log(error.response);
        return error.response
    }
}

export default{
    buildCertificate
}