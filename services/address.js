import axios from "axios";

const base_url = 'http://localhost:8080/api/v1/address';

export const addAddress = async (data, token) => {
    console.log(data)
    return await axios.post(`${base_url}/add-address`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getAllAddress = async (token) => {
    return await axios.get(`${base_url}/get-address`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data);
}

export const deleteAddress = async (id, token) => {
    return await axios.delete(`${base_url}/remove-address?id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}