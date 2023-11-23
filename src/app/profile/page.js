"use client";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Profile = () => {
  const { user } = useContext(GlobalContext);
  const router = useRouter();

  const handleBack = ()=>{
    router.push("/home");
  }

  return (
    <section className="bg-slate-200">
      
      <img
        src="https://img.indiafilings.com/learn/wp-content/uploads/2016/09/12010621/Company-Management.jpg"
        alt="background"
        className="absolute inset-0  min-h-full object-cover md:flex "
      />
      
      <div className="rounded-xl mb-10 bg-white bg-opacity-40 backdrop-blur-xl border px-4 md:px-6 md:mt-10 h-100vh md:ml-40 md:mr-40 mt-20 mx-2 ">
      <button className="text-white rounded-xl p-1 mt-2 hover:text-black" onClick={handleBack}>Back</button>
        <div className="flex flex-col ">
          <h1 className="flex text-center mx-auto m-6 md:text-4xl text-xl text-black font-bold">
            Profile
          </h1>
          <div className="flex flex-row justify-between text-black text-xl font-bold items-center md:mx-20 mt-10">
            <h1>Name :</h1>

            {user ? <h1>{user.name}</h1> : <p>No name available</p>}
          </div>
          <div className="flex flex-row justify-between text-black text-xl font-bold items-center md:mx-20 mt-10 pb-20">
            <h1>Email :</h1>
            {user ? <h1>{user.email}</h1> : <p>No email available</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
