import axios from "axios";

const authQuery = axios.create({
    baseURL: 'https://localhost:7179/api/UsersAuth',
})

export const register = async (body) =>{
    try{
        const request = await authQuery.post("/register",body)
        request.data.token && localStorage.setItem( 'token', request.data.token )
        return request.data
    }catch(error){
        return error.response.data
    }
}

export const login = async (body) => {
    try {
        const request = await authQuery.post("/login",body)
        request.data.token && localStorage.setItem( 'token', request.data.token )
        return request.data
    } catch (error) {
        return error.response.data
    }
}

export default { 
    register,
    login
}
