import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

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

const EntriesEmployeesColumnThree = (props) => {
  const [topvalue, setTopvalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-center w-full">
          <div className="flex md:flex-col flex-row gap-0 h-[60px] md:h-auto items-center justify-start">
            <div className="flex md:flex-1 md:flex-col flex-row gap-9 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="sm:text-2xl md:text-[16px] text-[16px] text-blue_gray-700 w-auto"
                  size="txtInterMedium28"
                >
                  {props?.title}
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-auto md:w-full">
                <div className="flex flex-col h-[52px] md:h-auto items-start justify-center w-[480px] sm:w-full">
                  <div className="flex flex-col h-12 md:h-auto items-start justify-start w-full">
                    <Input
                      name="top"
                      placeholder="Search to find anything easier"
                      value={topvalue}
                      onChange={(e) => setTopvalue(e)}
                      className="font-inter leading-[normal] p-0 placeholder:text-blue_gray-200 text-base text-blue_gray-200 text-left w-full"
                      wrapClassName="bg-gray-50 flex px-4 py-3 rounded-lg w-full"
                      suffix={
                        topvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer h-6 ml-[35px] my-auto"
                            onClick={() => setTopvalue("")}
                            fillColor="#b4b9c3"
                            height={24}
                            width={24}
                            viewBox="0 0 24 24"
                          />
                        ) : (
                          <Img
                            className="cursor-pointer h-6 ml-[35px] my-auto"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        )
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start rounded-lg w-[250px]">
                  <div className="flex flex-col items-start justify-start p-1 rounded-lg w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <SelectBox
                          className="bg-gray-50 font-inter h-[52px] leading-[normal] px-4 py-3.5 rounded-lg text-base text-blue_gray-300 text-left w-full"
                          placeholderClassName="text-blue_gray-300"
                          indicator={
                            <Img
                              className="h-6 w-6"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="top_One"
                          options={topOneOptionsList}
                          isSearchable={false}
                          placeholder="Filter by department"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-end w-full">
              <div className="flex flex-col items-center justify-end w-auto">
                <Button
                  className="bg-blue_gray-900 cursor-pointer flex items-center justify-center px-3 py-[11px] rounded-lg"
                  rightIcon={
                    <Img
                      className="h-3 ml-1"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  }
                >
                  <div className="font-inter font-normal sm:px-0 text-center text-sm text-white-A700">
                    {props?.addNewProduct}
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between">
            <List
              className="sm:flex-col flex-row md:gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-between"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 md:flex-1 flex-col items-start justify-start rounded-lg">
                <div className="flex flex-col items-start justify-start p-1 rounded-lg">
                  <div className="flex flex-col items-start justify-start w-[250px]">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start px-1 w-full">
                        <Text
                          className="text-blue_gray-200 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          {props?.label}
                        </Text>
                      </div>
                      <SelectBox
                        className="bg-gray-50 font-inter h-[52px] leading-[normal] px-4 py-3.5 rounded-lg text-base text-blue_gray-300 text-left w-full"
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
                        placeholder="Filter by Supplier"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-1 flex-col items-start justify-start rounded-lg w-auto md:w-full">
                <div className="flex flex-col items-start justify-start p-1 rounded-lg w-full">
                  <div className="flex flex-col items-start justify-start w-[250px]">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start px-1 w-full">
                        <Text
                          className="text-blue_gray-200 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          {props?.label1}
                        </Text>
                      </div>
                      <SelectBox
                        className="bg-gray-50 font-inter h-[52px] leading-[normal] px-4 py-3.5 rounded-lg text-base text-blue_gray-300 text-left w-full"
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
                        options={topOptionsList1}
                        isSearchable={false}
                        placeholder="Filter by brand"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-1 flex-col items-start justify-start rounded-lg w-auto md:w-full">
                <div className="flex flex-col items-start justify-start p-1 rounded-lg w-full">
                  <div className="flex flex-col items-start justify-start w-[250px]">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start px-1 w-full">
                        <Text
                          className="text-blue_gray-200 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          {props?.label2}
                        </Text>
                      </div>
                      <SelectBox
                        className="bg-gray-50 font-inter h-[52px] leading-[normal] px-4 py-3.5 rounded-lg text-base text-blue_gray-300 text-left w-full"
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
                        options={topOptionsList2}
                        isSearchable={false}
                        placeholder="Filter by capacity"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-1 flex-col items-start justify-start rounded-lg w-auto md:w-full">
                <div className="flex flex-col items-start justify-start p-1 rounded-lg w-full">
                  <div className="flex flex-col items-start justify-start w-[250px]">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start px-1 w-full">
                        <Text
                          className="text-blue_gray-200 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          {props?.label3}
                        </Text>
                      </div>
                      <SelectBox
                        className="bg-gray-50 font-inter h-[52px] leading-[normal] px-4 py-3.5 rounded-lg text-base text-blue_gray-300 text-left w-full"
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
                        options={topOptionsList3}
                        isSearchable={false}
                        placeholder="Filter by warehouse"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

EntriesEmployeesColumnThree.defaultProps = {
  title: "All Employees / Users",
  addNewProduct: "Add new product",
  label: "Supplier",
  label1: "Brand",
  label2: "Capacity",
  label3: "Warehouse",
};

export default EntriesEmployeesColumnThree;
