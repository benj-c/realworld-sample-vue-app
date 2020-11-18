import axios from "axios";
import { getAccessToken, logOut } from "./Auth";

//request interceptor
axios.interceptors.request.use(
    config => {
        config.baseURL = process.env.VUE_APP_BASE_URL;
        config.headers["Accept"] = "application/json";
        config.headers["Content-Type"] = "application/json";
        if (!config.url.includes("login")) {
            config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//response interceptor
axios.interceptors.response.use(
    response => {
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            logOut();
        }
        return Promise.reject(error.response);
    }
);

export const UserApi = {
    login: async data => {
        const res = await axios.post("/e8617853-e99b-4396-8908-a6e827f2f652", data);
        return res;
    }
}
