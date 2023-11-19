import axios from "axios";

const base_url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/address`;

export const addAddress = async (data, token) => {
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