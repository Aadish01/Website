import axios from "axios";

export const getAllMenu = async RestaurantId => {
    const { data } = await axios.get('/m/foods/'+ RestaurantId);
    return data ;
};

export const getByName = async (RestaurantId,searchTerm) => {
    const { data } = await axios.get('/m/search/'+ RestaurantId + '/' + searchTerm);
    return data;
}
export const getByFoodId = async (RestaurantId,foodid) => {
    const { data } = await axios.get('/m/food/'+ RestaurantId + '/' + foodid);
    return data;
}

export const getAllCategories = async RestaurantId => {
    const { data } = await axios.get('/m/category/'+RestaurantId)
    return data ;
}

export const getAllByTag = async (RestaurantId, CategoryName) => {
    if (CategoryName === 'All') return getAllMenu(RestaurantId) ;
    const { data } = await axios.get('/m/foodsbyCategory/'+RestaurantId+'/'+ CategoryName );
    return data;
}
export const getBestSellers = async RestaurantId => {
    const { data } = await axios.get('/m/bestsellers/'+RestaurantId);
    return data ;
}
