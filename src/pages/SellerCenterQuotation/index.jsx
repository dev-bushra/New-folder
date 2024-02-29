import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import SellerCenterQuotationForm from "components/Sections/SellerCenterQuotationForm";

import { createColumnHelper } from "@tanstack/react-table";
import { useSelector, useDispatch } from "react-redux";
import SellerCenterQuotationProductsCards from "../../components/Cards/SellerCenterQuotationProductsCards";

import {
  Button,
  Img,
  Input,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";

import SalerTable from "../../components/Table/salerTable";
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

const SellerCenterQuotation = () => {
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
            No
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
  const numberOfCards = 10;

  return (
    <div className="w-full grid grid-cols-12 h-screen bg-[#fff]">
      {/*  ## LeftSide - SideBar ##  */}
      <h1 className="sm:hidden col-span-2 bg-[#fff]">SideNav</h1>

      {/*  ## RightSide - Filter ##  */}
      <div className="sm:col-span-10 col-span-10 bg-[#F8F9FA] mt-3 mr-3 rounded-tl-[24px] rounded-tr-[24px] p-[24px]">
        <EntriesEmployeesColumnThree
          onClick={handleButtonClick}
          className="bg-white-A700 flex flex-col gap-8 items-start justify-center p-5 rounded-[16px]"
        />
        <div className="cards-wrapper w-full flex  flex-wrap gap-5 mt-5">
          {Array.from({ length: numberOfCards }, (_, index) => (
            <SellerCenterQuotationProductsCards key={index} />
          ))}
        </div>
        {/* <SellerCenterQuotationForm /> */}
      </div>
    </div>
  );
};
export default SellerCenterQuotation;
