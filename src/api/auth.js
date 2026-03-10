import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:3000/auth",
    withCredentials : true
});

export const loginUser = (data) => API.post('/login', data);
export const signupUser = (data) => API.post('/register',  data);
export const sendOTP = (data) => API.post('/sendOTP', data);
export const verifyOTP = (data) => API.post('/verifyOTP', data);
export const registerUniversity = (data) => API.post('/registerUniversity', data);