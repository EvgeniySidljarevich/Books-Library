import axios from "axios";

const defaultConfig = {
    baseURL: "https://fox-library-api.herokuapp.com/api",
    headers: {
      "Content-Type": "application/json",
    },
}

export const createInstance = (config = {}) => {
    const newConfig =  {
        ...config,
        ...defaultConfig,
    };

    return axios.create(newConfig);
};