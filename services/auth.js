import axios from "axios";

const baseUrl = 'http://localhost:8080/api/v1'

export const authenticate = async (data) => {
    return await axios.post(`${baseUrl}/auth/authenticate`,data);
}

export const register = async (data) => {
    return await axios.post(`${baseUrl}/auth/register`,{
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        password:data.password
    })
}