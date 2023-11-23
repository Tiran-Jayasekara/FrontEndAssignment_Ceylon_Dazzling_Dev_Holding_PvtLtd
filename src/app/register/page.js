"use client";
import React from "react";
import { registrationFormControls } from "@/components/utils";
import InputComponent from "@/components/InputComponents";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerNewUser } from "@/Services/register";
import { message } from "antd";

const initialFormData = {
  name: "",
  email: "",
  password: "",
};

const register = () => {
  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter();

  // This form is used for validate register Form Data
  function isFormValid() {
    return formData &&
      formData.name &&
      formData.name.trim().length >= 2 &&
      formData.email.trim() !== "" &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim().length >= 4 &&
      formData.password.trim() !== ""
      ? true
      : false;
  }

  // This Function is used for handle register
  const handleRegisterOnSubmit = async () => {
    if (formData) {
      const responseData = await registerNewUser(formData);
      console.log(responseData);
      if (responseData && responseData.data.message == "User Add Successfull") {
        message.success("User Add Successfull");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        message.error("Email Already Exist");
      }
    } else {
      message.error("InCompleted Form Data");
    }
  };

  return (
    <div className="bg-opacity-60 backdrop-blur-lg  bg-white relative h-screen">
      <img
        src="https://img.indiafilings.com/learn/wp-content/uploads/2016/09/12010621/Company-Management.jpg"
        alt="background"
        className="absolute inset-0 w-full md:h-full object-cover hidden md:flex "
      />
      <img
        src="https://img.indiafilings.com/learn/wp-content/uploads/2016/09/12010621/Company-Management.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover md:hidden "
      />
      <div className="flex flex-col items-center justify-between pt-0 pr-4 pb-0 pl-4 mt-0 md:mt-18 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-0 pl-0 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 md:pr-10 md:pl-10 pr-6 pb-10 pl-6 mb-20 bg-opacity-40 backdrop-blur-el bg-white shadow-2xl rounded-xl md:mt-20 relative z-10">
              <p className="w-full md:text-6xl text-2xl text-center font-serif md:mt-0 mb-4 text-blue-600 font-bold">
                Register
              </p>

              <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                {registrationFormControls.map((controlItem, index) => (
                  <InputComponent
                    key={index}
                    type={controlItem.type}
                    placeholder={controlItem.placeholder}
                    label={controlItem.label}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        [controlItem.id]: event.target.value,
                      });
                    }}
                    value={formData[controlItem.id]}
                  />
                ))}
                <button
                  className=" disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                 text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide rounded-md hover:bg-blue-600
                 "
                  disabled={!isFormValid()}
                  onClick={handleRegisterOnSubmit}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
