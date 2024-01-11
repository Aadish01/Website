import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('/admin/login', { email, password },{withCredentials:true});
      setUser(response.data);
      toast.success("Login Successful Admin")
    } catch (error) {
      toast.error(`Login failed Admin : ${error.response.data.message}`);
    }
  };
  const signup = async (email, password, restaurantName, address , description ,contact ,openingTime , closingTime , instaLink , fbLink,addressLink) => {
    try {
      const response = await axios.post('/admin/signup', {
        email,
        password,
        restaurantName,
        address, addressLink , description , fbLink , instaLink ,contact ,openingTime , closingTime ,
      },{withCredentials: true});
      setUser(response.data);
      toast.success('SignUp Successful Admin')
    } catch (error) {
      toast.error(`Signup failed Admin : ${error.response.data.message}`)
    }
  };
  const checkAdmin = async () => {
    try {
      const response = await axios.get('/admin/check',{withCredentials: true});
      setUser(response.data);
    } catch (error) {
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post('/admin/logout', {}, {withCredentials: true});
      toast.success('Logout Successful Admin');
      setUser(null);
    } catch (error) {
      toast.error(`Logout Falied Admin : ${error.response.data.message}`);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, checkAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAdmin = () => useContext(AuthContext);