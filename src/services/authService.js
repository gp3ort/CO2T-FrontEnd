import axios from "axios";

const authQuery = axios.create({
    baseURL: import.meta.env.VITE_PATH + '/api/UsersAuth',
})

export const register = async (body) =>{
    try{
        const request = await authQuery.post("/register",body)
        return request
    }catch(error){
        console.log(error.response);
        return error.response
    }
}

export const login = async (body) => {
    try {
        const request = await authQuery.post("/login",body)
        console.log(request);
        request.data.result.token && localStorage.setItem( 'miToken', request.data.result.token )
        return request
    } catch (error) {
        return error.response
    }
}

export const getUser = async (id) => {
    try{
        const request = await authQuery.get("/user/" + id)
        return request
    }catch (error){
        return error.response
    }
}
export default { 
    register,
    login,
    getUser
}
