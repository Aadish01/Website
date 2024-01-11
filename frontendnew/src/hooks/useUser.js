import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [phone, setphone] = useState(null);
  const [otp, setotp] = useState(null);


  const createOTP = async (phone,otp) => {
    try {
      await axios.post('/user/otp', { phone },{withCredentials:true});
      setotp('0000');
      toast.success('OTP Sent Successfully');
    } catch (error) {
      toast.error(`Failed : ${error.response.data.message} `);
    }
  };

  const verifyOTP = async (phone , otp) => {
    try {
      const response = await axios.post('/user/login', { phone, otp },{withCredentials:true});
      toast.success(`Login Successful ${response.data.phone}`);
      setphone(response.data.phone);
      setotp(null);
    } catch (error) {
      toast.error(`Failed : ${error.response.data.message}`);
    }
  };
  const checkUser = async () => {
    try {
      const response = await axios.get('/user/check',{withCredentials:true})
      setphone(response.data.phone)
    } catch (error) {
      setphone(null);
    }

  }
  const logout = async () => {
    try {
      await axios.post('/user/logout' , {} ,{withCredentials:true});
      setphone(null);
      setotp(null);
      toast.success('Logout Successful');
    } catch (error) {
      toast.error(`Logout Failed: ${error}`);
    };
  };

  return (
    <UserContext.Provider value= {{ phone, otp, createOTP, checkUser ,verifyOTP , logout }}>
      {children}
    </UserContext.Provider>
  );

}

export const useUser = () => useContext(UserContext)
