import axios from "axios";

const base_url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/enquiry`;

export const addEnquiry = async (data) => {
    return await axios.post(`${base_url}/post-enquiry`, data)
}