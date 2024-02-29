import React, { useState } from 'react';
import {
  Button,
  Img,
  Input,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import SalerTable from "../Table/salerTable";
import { createColumnHelper } from "@tanstack/react-table";


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

const SellerCenterQuotationForm = () => {
  
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

  return (
    <>
      <div className="bg-[#fff] w-full flex-col p-3 px-5 rounded-xl ">
        <div className="w-full flex items-center justify-between rounded-lg">
          <h1 className="font-semibold text-[18px]">Seller Center Quotation</h1>
          <span className="text-[12px] text-[#B4B9C3] bg-[#F8F9FA] py-2 px-3 rounded-md">
            X
          </span>
        </div>
        <div className="flex items-center gap-5 my-5">
          <div className="flex items-center">
            <div className="w-4 h-4 border-[1px] border-[#9098A5] rounded-full mr-2"></div>
            <span className="text-[14px] text-[#9098A5]">Wholesale</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 border-[1px] border-[#9098A5] rounded-full mr-2"></div>
            <span className="text-[14px] text-[#9098A5]">Retail</span>
          </div>
        </div>
      </div>

      <div className="flex-col bg-[#fff] rounded-lg w-full p-4 px-10 mt-5">
        <div className="flex gap-x-5 pt-5">
          <div className="flex-col w-full">
            <span className="ml-2 text-[14px] text-[#B4B9C3] font-medium">
              Exporter
            </span>
            <SelectBox
              className="mt-1 bg-gray-50 font-inter h-[52px] leading-[normal] px-4 py-3.5 rounded-lg text-base text-blue_gray-300 text-left w-full"
              placeholderClassName="text-blue_gray-300"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="top"
              options={topOptionsList}
              isSearchable={false}
              placeholder="Select Exporter"
            />
          </div>
          <div className="flex-col w-full">
            <span className="ml-2 text-[14px] text-[#B4B9C3] font-medium">
              Buyer Address
            </span>
            <SelectBox
              className="mt-1 bg-gray-50 font-inter h-[52px] leading-[normal] px-4 py-3.5 rounded-lg text-base text-blue_gray-300 text-left w-full"
              placeholderClassName="text-blue_gray-300"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="top"
              options={topOptionsList}
              isSearchable={false}
              placeholder="Select Buyer address"
            />
          </div>
        </div>

        <div className="flex gap-x-5 pt-5">
          <div className="flex-col w-full">
            <span className="ml-2 text-[14px] text-[#B4B9C3] font-medium">
              Final Destination
            </span>
            <SelectBox
              className="mt-1 bg-gray-50 font-inter h-[52px] leading-[normal] px-4 py-3.5 rounded-lg text-base text-blue_gray-300 text-left w-full"
              placeholderClassName="text-blue_gray-300"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="top"
              options={topOptionsList}
              isSearchable={false}
              placeholder="Select Final Destination"
            />
          </div>
          <div className="flex-col w-full">
            <span className="ml-2 text-[14px] text-[#B4B9C3] font-medium">
              Phone Number
            </span>
            <Input
              name="top"
              placeholder="Phone Number"
              className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
              wrapClassName="mt-1 bg-gray-50 flex px-4 py-3 rounded-lg w-full h-[50px]"
            ></Input>
          </div>
        </div>

        <div className="flex-col w-1/2 mt-5">
          <span className="ml-2 text-[14px] text-[#B4B9C3] font-medium">
            Note
          </span>
          <Input
            name="top"
            placeholder="Type notes here"
            className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
            wrapClassName="mt-1 bg-gray-50 flex px-4 py-3 rounded-lg w-full h-[150px]"
          ></Input>
        </div>

        <div className="table mt-10 min-w-full">
          <SalerTable
            columns={tableColumns}
            data={tableData.current}
            rowClass={"bg-white-A700 border border-gray-50"}
            headerClass="bg-white-A700 border border-gray-50"
          />
        </div>
      </div>
    </>
  );
};

export default SellerCenterQuotationForm;;