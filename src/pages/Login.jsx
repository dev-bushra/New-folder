import { Input } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Button, Img, List, SelectBox, Text } from "components";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#F8F9FA]">
      <div className="login-form-wrapper min-w-[500px] bg-[#fff] rounded-[24px] p-10 py-15 flex flex-col gap-10">
        <div className="w-full flex items-center  justify-between ">
          <div className="login-title flex flex-col items-start justify-between font-inter">
            <h3 className="text-[18px] text-[#000000] font-normal m-0 p-0">
              Welcome to
            </h3>
            <h3 className="text-[60px] text-[#C62A1C] font-black m-0 p-0">
              ASG
            </h3>
            <h3 className="text-[12px] text-[#6c6c6c] font-normal m-0 p-0">
              Next genaration erp portal
            </h3>
          </div>
          <img
            src="../src/assets/images/handid.jpg"
            alt=""
            width={100}
            height={80}
          />
        </div>
        <div className="login-form flex flex-col gap-7 mt-10">
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
        <Button className="bg-blue_gray-900 cursor-pointer p-4 px-6 font-inter flex items-center justify-between rounded-lg">
          <span className="text-[#fff] text-[14px] font-normal font-inter">
            Login
          </span>
          <IoIosArrowForward color="#fff" size={18} />
        </Button>
      </div>
    </div>
  );
};
export default Login;
