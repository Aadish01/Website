import axios from "axios";
import toast from "react-hot-toast";

export const getAllRestaurants = async () => {
    try {
      const response = await axios.get('/restaurant/list');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getRestaurantById = async (id) => {
    try {
      const response = await axios.get(`/restaurant/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateRestaurant = async (id, data) => {
    try {
      const response = await axios.patch(`/restaurant/update/${id}`, data, {withCredentials:true});
      toast.success('Updated SuccesFully');
      return response.data;
    } catch (error) {
      toast.error('Failed : Error Occured');
      throw error;
    }
  };