import axios from "axios";

const cloudinary_url = 'https://api.cloudinary.com/v1_1/dwutzvwdf/image/upload';
const base_url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/category`;

export const addCategory = async (formData, data, token) => {

    return await axios.post(cloudinary_url, formData)
        .then(async (res) => {
            return await axios.post(`${base_url}/add-category`, { name: data.name, image: res.data.secure_url }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        });
}

export const getAllCategories = async () => {
    return await axios.get(`${base_url}/all-categories`).then(res=>res.data);
}

export const deleteCategory = async (id, token) => {
    return await axios.delete(`${base_url}/delete-category/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
}