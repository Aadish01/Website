import axios from "axios";

export const getAdds = async RestaurantId => {
    const { data } = await axios.get('/a/adds/'+ RestaurantId);
    return data ;
}