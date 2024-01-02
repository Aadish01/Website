import axios from "axios";

export const getRestaurant = async (name, id) => {
    const { data } = await axios.get('/r/restaurant/'+ name+'/'+id)
    return data;
}
export const getAllRestaurants = async () => {
    const { data } = await axios.get('/r/allrestaurants')
    return data;
}