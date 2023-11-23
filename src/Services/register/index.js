import axios from "axios";

// This is user Register Method
export const registerNewUser = async (formData) => {
  const http = axios.create({
    baseURL: "http://localhost:3002",
    

    headers: {
      "Content-type": "application/json",
    },
  });

  try {
    const response = await http.post("/users/addUser", formData);
    return response;
  } catch (e) {
    return e;
  }
};
