import axios from 'axios';

const BASE_URL = "http://localhost:5003/api/v1/";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})