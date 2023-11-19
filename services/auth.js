import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth`

export const authenticate = async (data) => {
    return await axios.post(`${baseUrl}/authenticate`,data);
}

export const register = async (data) => {
    return await axios.post(`${baseUrl}/register`,{
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        password:data.password
    })
}