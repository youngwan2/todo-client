import axios from "axios";
import { getToken } from "../utils/tokenUtil";



export const apiClient = axios.create({
    baseURL: 'http://localhost:80/',
});

apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + getToken()
apiClient.defaults.headers.post["Content-Type"] = 'application/json'
apiClient.defaults.withCredentials = true;