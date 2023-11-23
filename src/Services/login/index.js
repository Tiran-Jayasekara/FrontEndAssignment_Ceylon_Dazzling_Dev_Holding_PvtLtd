import axios from "axios";

//This is login method .
export const loginUser = async (formData) => {
  const http = axios.create({
    baseURL: "http://localhost:3002",
    

    headers: {
      "Content-type": "application/json",
    },
  });

  try {
    const response = await http.post("/users/Login", formData);
    return response;
  } catch (e) {
    return e;
  }
};
