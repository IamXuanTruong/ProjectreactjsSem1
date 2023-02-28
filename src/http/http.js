import axios from "axios"
const http = axios.create()

export const get = async (url, config = {}) => {
    const response = await http.get(url, config);
    return response.data;
}

export default http;