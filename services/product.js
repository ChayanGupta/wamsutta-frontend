import axios from "axios";

const cloudinary_url = 'https://api.cloudinary.com/v1_1/dwutzvwdf/image/upload';
const base_url = 'http://localhost:8080/api/v1/products';

export const getNewArrivals = async () => {
    return await axios.get(`${base_url}/new-arrivals`).then(res=>res.data);
}

export const getSpecificCategoryProducts = async (name) => {
    return await axios.get(`${base_url}/category-specific-products?categoryName=${name}`).then(res=>res.data);
}

export const getProductDetails = async (id) => {
    return await axios.get(`${base_url}/product-details?id=${id}`).then(res=>res.data);
}

export const getAllProducts = async () => {
    return await axios.get(`${base_url}/all-products`).then(res=>res.data);
}

export const deleteProduct = async (id, token) => {
    return await axios.delete(`${base_url}/remove-product?productId=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const addProduct = async (data, mainImage, image1, image2, image3, image4, image5, token) => {
    return await axios.post(`${base_url}/add-product?categoryName=${data.category}`, { ...data, mainImage, image1, image2, image3, image4, image5 }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const uploadProductImage = async (formData) => {
    return await axios.post(cloudinary_url, formData);
}