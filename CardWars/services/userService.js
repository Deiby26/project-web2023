// services/userService.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users/ingresar"; // Replace with your API's base URL

export default {
  async login(credentials) {
    try {
      const response = await axios.post(`${BASE_URL}`, credentials);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Error logging in");
      } else {
        throw new Error("Network error");
      }
    }
  },

  // ... other user-related API functions
};
