import { createInstance } from "./instance";

const api = createInstance();

export const getBooksData = async () => {
    const { data } = await api.get(`/library`);
    return data;
};