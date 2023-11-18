import { decryptData } from "../secure/encrypt-decrypt"
import axios from "axios";

const base_url = 'http://localhost:8080/api/v1/user'

export const getProfileDetails = async (email) => {
    const {accessToken} = await decryptData('user');
    return await axios.get(`${base_url}/profile?email=${email}`,{
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    }).then(res=>res.data)
}