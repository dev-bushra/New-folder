import { Input } from "components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Button, Img, List, SelectBox, Text } from "components";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT_COUNTER" });
  };

  const [username, setUsername] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFieldsFiled, setIsFieldsFiled] = useState(false);
  const [userLoggedInSuccessfully, setUserLoggedInSuccessfully] = useState(false);

  // check if username and password field are filed by the user
  const handleCheckingIfAllFieldsfiled = () => {
    if(username.trim() === "" || password.trim() === "") {
      setIsFieldsFiled(false)
      return false;
    } else {
      setIsFieldsFiled(true)
      return true;
    }
  }

  // watch username and password fields
  useEffect(() => {
    handleCheckingIfAllFieldsfiled();
  }, [username, password]);
  
  // User Login Endpoint
  const handleLogin = async () => {
    setUserLoggedInSuccessfully(true)
    try {
      // Check user input validation
      // Hit the login endpoint to get the token 
      // If token valid save it in the store
    } catch (error) {
      // if user username or password is wrong show  error message
      setUserLoggedInFailed(true);
    }
  };
      
  // Route user to his dashboard 
  const handleMoveUserToHisDashboard = async () => {
    if (userLoggedInSuccessfully) {
      window.location.href = "/home"
      // history.push("/home");
    }
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#F8F9FA] sm:p-0 p-3">
      <div className="flex sm:flex-col md:flex-col items-center sm:justify-evenly md:justify-evenly justify-between sm:p-3 md:pl-0 md:pr-0 pl-7 pr-20 h-[100%] w-[100%]  login_image_bg relative rounded-3xl sm:rounded-none">
        {/* Text */}
        <h1 className="sm:hidden lg:block text-[#fff] text-[62px] font-bold font-inter">
          Have a great day <br />
          at work! : ) {count}
        </h1>
        {/* <button onClick={incrementCounter}>incrementCounter</button> */}
        {/* <div className="flex flex-col absolute bottom-5 md:hidden left-7">
          <div className="flex text-[#fff] font-inter text-[30px]">
            <h1 className="font-bold">AGS</h1>
            <span className="font-light ml-2">International </span>
          </div>
          <span className="text-[#fff] font-light font-inter max-w-[70%] text-[12px]">
            Green energy solutions for your better future.
          </span>
        </div> */}

        {/* Form */}
        <div className="login-form-wrapper sm:min-w-full sm:max-w-full min-w-[500px] bg-[#fff] rounded-[24px] p-10 flex flex-col gap-10">
          <div className="login-title flex items-center font-inter">
            <h3 className="text-[24px] text-[#3E4B63] font-semibold">Login</h3>
          </div>

          {userLoggedInSuccessfully ? (
            <>
              <div className="input-filed flex flex-col">
                <span className="text-[14px] text-[#B4B9C3] font-light font-inter ml-1 mb-2">
                  Choose Company
                </span>
                <select
                  className="ags_inputs border-0 font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                  placeholder="Select your company<"
                  onChange={(e) => setUserCompany(e.target.value)}
                >
                  <option value="AGS International">AGS International</option>
                  <option value="Abdul Jalil Chhada">Abdul Jalil Chhada</option>
                </select>
              </div>
              <button
                className={`"cursor-pointer py-3 px-5 font-inter flex items-center justify-center rounded-lg  text-center min-w-full" ${
                  isFieldsFiled
                    ? "bg-blue_gray-900 text-[#fff]"
                    : "bg-[#F8F9FA] text-[#B4B9C3] "
                }`}
                onClick={handleMoveUserToHisDashboard}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <div className="login-form flex flex-col gap-7">
                <div className="input-filed flex flex-col">
                  <span className="text-[14px] text-[#B4B9C3] font-light font-inter ml-1 mb-2">
                    Username
                  </span>
                  <input
                    name="username"
                    type="text"
                    className="ags_inputs border-0 font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-filed flex flex-col">
                  <span className="text-[14px] text-[#B4B9C3] font-light font-inter ml-1 mb-2">
                    Password
                  </span>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="ags_inputs border-0 font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                      placeholder="Enter  your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                      <IoEyeOffOutline
                        onClick={() => setShowPassword(false)}
                        color="#6b7280"
                        size={16}
                        className="absolute top-[15px] right-3 z-10"
                      />
                    ) : (
                      <IoEyeOutline
                        onClick={() => setShowPassword(true)}
                        color="#6b7280"
                        size={16}
                        className="absolute top-[15px] right-3 z-10"
                      />
                    )}
                  </div>
                </div>
              </div>
              <button
                className={`"cursor-pointer py-3 px-5 font-inter flex items-center justify-between rounded-lg self-end w-fit" ${
                  isFieldsFiled
                    ? "bg-blue_gray-900 text-[#fff]"
                    : "bg-[#F8F9FA] text-[#B4B9C3] "
                }`}
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
