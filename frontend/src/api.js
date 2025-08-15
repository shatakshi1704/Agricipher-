
import axios from 'axios';


const API_URL = "http://localhost:5001/auth";


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;  
  } catch (error) {
    throw error.response.data;  
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; 
  } catch (error) {
    throw error.response.data;  
  }
};
