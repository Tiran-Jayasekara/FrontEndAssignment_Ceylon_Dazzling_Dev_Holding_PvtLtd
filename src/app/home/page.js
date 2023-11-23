"use client";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";
import { useState } from "react";
import { getUser } from "@/Services/getUser";
import { useRouter } from "next/navigation";
import { message } from "antd";

const HomePage = () => {
  const { token, setUser, user } = useContext(GlobalContext);
  const router = useRouter();

  // This function is used for get user data
  const Profile = async () => {
    if (token) {
      const getUserData = await getUser(token);
      if (getUserData) {
        await setUser(getUserData.checkUser);
        console.log(getUserData.checkUser);
        setTimeout(() => {
          router.push("/profile");
        }, 1000);
      } else {
        message.error("There are no data related to this token");
      }
    } else {
      message.error("No Token Provided");
    }
  };

  return (
    <section className="bg-slate-200">
      <img
        src="https://img.indiafilings.com/learn/wp-content/uploads/2016/09/12010621/Company-Management.jpg"
        alt="background"
        className="absolute inset-0 w-full  min-h-full object-cover md:flex "
      />
      <div className=" relative rounded-xl mb-10 bg-white bg-opacity-40 backdrop-blur-xl border w-auto px-4 sm:px-6 md:px-8 md:mt-10  h-100vh md:ml-40 md:mr-40 mt-20 mx-10">
      <button className="text-white rounded-xl p-1 mt-2 hover:text-black" onClick={()=>{router.push("/")}}>Back</button>
        <div className="flex flex-col ">
          <h1 className="md:text-4xl text-2xl font-bold justify-center mx-auto m-10 text-black">
            This is Home Page
          </h1>
          <button
            className="disabled:opacity-50 inline-flex w-40 mx-auto md:mb-40 mb-10 items-center justify-center bg-black px-0 py-4 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide rounded-md
                     "
            onClick={Profile}
          >
            Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
