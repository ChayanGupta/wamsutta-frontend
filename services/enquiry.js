import axios from "axios";

const base_url = 'http://localhost:8080/api/v1/enquiry';

export const addEnquiry = async (data) => {
    return await axios.post(`${base_url}/post-enquiry`, data)
}