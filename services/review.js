import axios from "axios";

const base_url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/testimonial`;

export const addReview = async (data, token) => {
    return await axios.post(`${base_url}/add-testimonial`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getProductReview = async (id) => {
    return await axios.get(`${base_url}/get-product-review?id=${id}`).then(res => res.data);
}

export const getAllReview = async () => {
    return await axios.get(`${base_url}/all-testimonials`).then(res => res.data);
}

export const deleteReview = async (id, token) => {
    return await axios.delete(`${base_url}/reject-testimonials?id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}