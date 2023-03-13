import axios from "axios";

export const ecomConfig = axios.create({
    baseURL:'http://localhost:8000/api/v1/'
})