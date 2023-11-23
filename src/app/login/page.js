"use client";
import { useRouter } from "next/navigation";
import { loginFormControls } from "@/components/utils";
import InputComponent from "@/components/InputComponents";
import { useContext, useState } from "react";
import { loginUser } from "@/Services/login";
import { message } from "antd";
import Cookies from "js-cookie";
import { GlobalContext } from "@/context";

// this is used for make form as empty
const initialFormData = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const { setToken } = useContext(GlobalContext);

  //This Function is Used for validate the Form Data
  function isValidForm() {
    return formData &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
      ? true
      : false;
  }

  //This function is used for Login
  const handleLogin = async () => {
    if (formData.email && formData.password) {
      const responseData = await loginUser(formData);

      if (responseData.data.message == "Login Success") {
        message.success("Login Success");
        setToken(responseData?.data?.token);
        Cookies.set("token", responseData?.data?.token);
        setTimeout(() => {
          router.push("/home");
        }, 1000);
      } else {
        message.error("You Are not a Registered User. Please Register");
      }
    } else {
      message.error("Please Fill All Fields");
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
            <div className="flex flex-col items-center justify-start pt-10 md:pr-10 md:pl-10 pr-6 pb-10 pl-6 mb-0 bg-opacity-40 backdrop-blur-el bg-white shadow-2xl rounded-xl relative z-10 mt-10">
              <p className="w-full md:text-6xl text-4xl font-bold text-center font-serif md:mt-0 mb-4 text-blue-600">
                Login
              </p>
              <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                {loginFormControls.map((controlItem, index) =>
                  controlItem.componentType === "input" ? (
                    // This InputComponent is used for design Lable and Input Fields
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
                    />
                  ) : null
                )}
                <button
                  className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-blue-600 px-6 py-4 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide rounded-md hover:bg-blue-600
                     "
                  disabled={!isValidForm()}
                  onClick={handleLogin}
                >
                  Login
                </button>
                <div className="flex flex-col gap-2 text-black">
                  <p>New to website ?</p>
                  <button
                    className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide rounded-md hover:bg-blue-600
                     "
                    onClick={() => router.push("/register")}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
