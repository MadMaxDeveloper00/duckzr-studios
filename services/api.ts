import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7071/api",
    withCredentials: true
});

api.interceptors.request.use((config) => {

    if (typeof window !== "undefined") {

        const token =
            localStorage.getItem("duckzr_token");

        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;
        }
    }

    return config;
});

export default api;