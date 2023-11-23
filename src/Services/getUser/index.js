import axios from "axios";

// This method is used for get User data from Backend
export const getUser = async (token) => {
  const http = axios.create({
    baseURL: "http://localhost:3002",
    

    headers: {
      "Content-type": "application/json",
      "x-auth-token": token,
    },
  });

  try {
    const response = await http.get("/users/profile");
    return response.data;
  } catch (e) {
    return e;
  }
};
