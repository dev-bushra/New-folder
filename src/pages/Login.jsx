import { Input } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Button, Img, List, SelectBox, Text } from "components";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#F8F9FA]">
      <div className="flex items-center justify-between pl-7 pr-20 h-[100%] w-[100%]  login_image_bg relative">
        <h1 className="text-[#fff] text-[62px] font-bold font-inter">
          Have a great day <br />
          at work! : )
        </h1>
        <div className="flex flex-col absolute bottom-5 left-7">
          <div className="flex text-[#fff] font-inter text-[30px]">
            <h1 className="font-bold">AGS</h1>
            <span className="font-light ml-2">International </span>
          </div>
          <span className="text-[#fff] font-light font-inter max-w-[70%] text-[12px]">
            Green energy solutions for your better future.
          </span>
        </div>
        <div className="login-form-wrapper min-w-[500px] bg-[#fff] rounded-[24px] p-10 flex flex-col gap-10">
          <div className="login-title flex items-center font-inter">
            <h3 className="text-[24px] text-[#3E4B63] font-normal">Login to</h3>
            <h3 className="text-[28px] text-[#C62A1C] font-bold ml-1">ASG</h3>
          </div>
          <div className="login-form flex flex-col gap-7">
            <div className="input-filed flex flex-col">
              <span className="text-[14px] text-[#B4B9C3] font-light font-inter ml-1 mb-2">
                Username
              </span>
              <Input
                name="top"
                placeholder="Enter  your username"
                label={false}
                className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
              ></Input>
            </div>
            <div className="input-filed flex flex-col">
              <span className="text-[14px] text-[#B4B9C3] font-light font-inter ml-1 mb-2">
                Password
              </span>
              <Input
                name="top"
                placeholder="Enter  your password"
                label={false}
                className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
              ></Input>
            </div>
          </div>
          <Button className="bg-blue_gray-900 cursor-pointer p-4 font-inter flex items-center justify-between rounded-lg">
            <span className="text-[#fff] text-[16px] font-normal font-inter">
              Login
            </span>
            <IoIosArrowForward color="#fff" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
