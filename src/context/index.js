"use client";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUser } from "@/Services/getUser";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setToken(Cookies.get("token"));
    }
    userData();
  }, []);

  // when we refresh our page, that time all data gonna remove from web application. so if we have to get that user data again
  // we need to call that getUser method again using token
  const userData = async () => {
    const userToken = Cookies.get("token");
    console.log(token);
    if (userToken) {
      const getUserData = await getUser(userToken);
      setUser(getUserData.checkUser);
      console.log(getUserData.checkUser);
    } else {
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        setToken,
        token,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
