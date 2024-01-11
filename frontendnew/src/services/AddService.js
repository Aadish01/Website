import axios from "axios";
import toast from "react-hot-toast";

export const uploadAdd = async (file) => {
    try {
      const response = await axios.post('/adds/create', file, {
                headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true ,
      });
      toast.success("Upload Successful");
    } catch (error) {
      console.error('Error uploading add:', error);
    }
  };

export const removeAdd = async (id) => {
    try {
      const response = await axios.delete(`/adds/remove/${id}`,{withCredentials:true});
      toast.success("Removed Successfully");
    } catch (error) {
      console.error('Error removing add:', error);
    }
  };

export const getAllAdds = async (id) => {
    try {
      const response = await axios.get(`/adds/list/${id}`,{withCredentials:true});
      return response.data;
    } catch (error) {
      console.error('Error fetching adds:', error);
    }
  };