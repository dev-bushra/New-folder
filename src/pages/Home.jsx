import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";
import { useSelector, useDispatch } from "react-redux";


import {
  Button,
  Img,
  Input,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import EntriesEmployeesColumnThree from "components/EntriesEmployeesColumnThree";

// import { CloseSVG } from "../../assets/images";

const topOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const topOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const topOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const topOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const topOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    console.log("handleButtonClick clicked!", isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  const tableData = React.useRef([
    {
      employeeusernamOne: "Employee Full Name",
      pklnumber: "images/img_edit_blue_gray_200.svg",
      customername: "Block",
    },
    {
      employeeusernamOne: "Employee Full Name",
      pklnumber: "images/img_edit_blue_gray_200.svg",
      customername: "Block",
    },
    {
      employeeusernamOne: "Employee Full Name",
      pklnumber: "images/img_edit_blue_gray_200.svg",
      customername: "Block",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("employeeusernamOne", {
        cell: (info) => (
          <Text
            className="pl-5 py-[35px] text-blue_gray-700 text-sm"
            size="txtInterRegular20"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="p-3 text-blue_gray-600 text-sm"
            size="txtInterRegular18"
          >
            Employee User Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("pklnumber", {
        cell: (info) => (
          <div className="flex flex-row sm:gap-10 items-center justify-between p-2">
            <Text
              className="text-blue_gray-700 text-sm"
              size="txtInterRegular20"
            >
              Designation/Role/
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="p-3 text-blue_gray-600 text-sm"
            size="txtInterRegular18"
          >
            Role
          </Text>
        ),
      }),
      tableColumnHelper.accessor("customername", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-end p-3">
            <div className="bg-gray-50 cursor-pointer flex items-center justify-center mr-1.5 px-[20px] py-4 rounded-lg">
              <Img
                className="h-3 w-3"
                alt="edit_One"
                src="images/img_edit_blue_gray_200.svg"
              />
            </div>
            <Button
              className="bg-gray-50 cursor-pointer flex items-center justify-center px-[50px] py-3 rounded-lg"
              rightIcon={
                <Img
                  className="h-3 ml-2"
                  src="images/img_location.svg"
                  alt="location"
                />
              }
            >
              <div className="sm:px-5 text-blue_gray-200 text-end text-sm">
                {info?.getValue()}
              </div>
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="p-3 text-blue_gray-600 text-sm text-right pr-20"
            size="txtInterRegular18"
          >
            Actions
          </Text>
        ),
      }),
    ];
  }, []);

  const [topvalue, setTopvalue] = React.useState("");

  const count = useSelector((state) => state.counter.count);
  console.log(count);

  return (
    <div className="w-full grid grid-cols-12 h-screen bg-[#fff]">
      {/*  ## LeftSide - SideBar ##  */}
      <h1 className="sm:hidden col-span-2 bg-[#fff]">SideNav {count}</h1>

      {/*  ## RightSide - Filter ##  */}
      <div className="sm:col-span-10 col-span-10 bg-[#F8F9FA] mt-3 mr-3 rounded-tl-[24px] rounded-tr-[24px] p-[24px]">
        {/* 1- Filter  */}
        <EntriesEmployeesColumnThree
          onClick={handleButtonClick}
          // handleToggleModal={() => {setIsModalOpen(!isModalOpen)}}
          className="bg-white-A700 flex flex-col gap-8 items-start justify-center p-5 rounded-[16px]"
        />

        {/* 2- Card */}
        <div className="cards-wrapper w-full flex  flex-wrap gap-5 mt-5">
          {/* Product Card */}
          <div className="flex flex-col bg-[#fff] rounded-xl p-4 min-w-[350px] max-w-[350px]">
            <div className="product-img flex items-center justify-center h-[160px] border-[.5px] border-[#F8F9FC] p-5 mb-10">
              <img
                width={170}
                height={140}
                src="https://s3-alpha-sig.figma.com/img/baf5/3378/a263061d70befa393a012ed367fb0017?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgB2F~Qgf8hm04NzgUNQLjB2IirPuGrB6~dKwmrKOBJ5Wl6a5stXD~wE75Xrx5JhDKGc8WhCeO4hgeji2MrSBfmYjiMBQXeVAR1ft2f6dWoxxheh3fGbwHP5PrM8emkXIxTzrUBVTt7VSgKqDEvPFlnyMpKe9nREth7bUKTED0qZzOz5XlwJlT3GdiMZz1txIFWSIXXWZAitG2UGWPv9urWpgPUUTydpSjmz6jiC4nnokbVgtRaw-h6OF4c-hfPf0OAhCGCJWoIqmc2DCUGb9amwrXlJe06vvQ2ztlHcJw32x7p6iiVRTimOgfvWHiA1rwUNsbFtpBSlrw0iv4WQbg__"
              />
            </div>
            <h3 className="product-title text-[20px] text-[#3E4B63] font-semibold font-inter mb-3">
              World East 12N6.5-BS (6.5 AH)
            </h3>
            <span className="product-sku text-[14px] text-[#9098A5] font-normal font-inter bg-[#F8F9FA] p-2 px-4 w-fit rounded-lg">
              SKU : OCESEPPEBATTERYSEPARATORPE
            </span>
            <div className="product-details flex flex-wrap gap-[6px] mt-5">
              <div className="border-[.5px] border-[#F8F9FC] p-3 rounded-md w-[48%] flex flex-col gap-1">
                <span className="text-[#9098A5] text-[12px] font-inter font-medium">
                  CP
                </span>
                <span className="text-[14px] font-inter">1092</span>
              </div>
              <div className="border-[.5px] border-[#F8F9FC] p-3 rounded-md w-[48%] flex flex-col gap-1">
                <span className="text-[#9098A5] text-[12px] font-inter font-medium">
                  HMC
                </span>
                <span className="text-[14px] font-inter">2033</span>
              </div>
              <div className="border-[.5px] border-[#F8F9FC] p-3 rounded-md w-[48%] flex flex-col gap-1">
                <span className="text-[#9098A5] text-[12px] font-inter font-medium">
                  In AGS
                </span>
                <span className="text-[14px] font-inter">234</span>
              </div>
              <div className="border-[.5px] border-[#F8F9FC] p-3 rounded-md w-[48%] flex flex-col gap-1">
                <span className="text-[#9098A5] text-[12px] font-inter font-medium">
                  In AJC
                </span>
                <span className="text-[14px] font-inter">1092</span>
              </div>
              <div className="border-[.5px] border-[#F8F9FC] p-3 rounded-md w-[48%] flex flex-col gap-1">
                <span className="text-[#9098A5] text-[12px] font-inter font-medium">
                  In transit
                </span>
                <span className="text-[14px] font-inter">1092</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
