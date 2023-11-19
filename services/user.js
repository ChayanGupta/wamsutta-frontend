import { decryptData } from "../secure/encrypt-decrypt"
import axios from "axios";

const base_url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user`

export const getProfileDetails = async (email) => {
    const {accessToken} = await decryptData('user');
    return await axios.get(`${base_url}/profile?email=${email}`,{
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    }).then(res=>res.data)
}