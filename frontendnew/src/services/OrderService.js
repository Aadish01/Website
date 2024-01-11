import axios from "axios";

export const createOrder = async order => {
    try {
        const { data } = axios.post('/o/create', order);
        return data;
    } catch (error) {
        
    }
}