import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8800/api",
});

// 👉 Header Function
export const getHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
};

// 👉 Register API
export const registerAPI = (payload) => {
  return API.post("/users/register", payload, getHeaders());
};

// login API
export const loginAPI = (payload) => {
  return API.post("/users/login", payload, getHeaders());
};