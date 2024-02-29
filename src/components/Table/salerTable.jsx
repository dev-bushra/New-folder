import React from "react";
import {
  Button,
  Img,
  Input,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";

export default function salerTable() {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead className="">
            <tr className="text-[14px] tracking-wide text-left border-[#F8F9FA] border-b border-t">
              <th className="px-4 py-3 font-[100] text-[#5E687C] text-[12px]">
                No
              </th>
              <th className="px-4 py-3 font-[100] text-[#5E687C] text-[12px]">
                Item Name/Part
              </th>
              <th className="px-4 py-3 font-[100] text-[#5E687C] text-[12px]">
                Unit Price (Currency)
              </th>
              <th className="px-4 py-3 font-[100] text-[#5E687C] text-[12px]">
                New Price
              </th>
              <th className="px-4 py-3 font-[100] text-[#5E687C] text-[12px]">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="">
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                1
              </td>
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                Plug M12 - Normal Hexnut
              </td>
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                25.340 $
              </td>
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                <input
                  type="text"
                  className="bg-[#F8F9FA] rounded-lg p-3 border-0 w-[5.7rem] text-[14px]"
                  placeholder="Enter here"
                />
              </td>
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                <input
                  type="text"
                  className="bg-[#F8F9FA] rounded-lg p-3 border-0 w-[5.7rem] text-[14px]"
                  placeholder="Enter here"
                />
              </td>
            </tr>
            <tr className="">
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                2
              </td>
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                World East 12 N6.5 - BS (6.5 AH)
              </td>
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                63.760 $
              </td>
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                <input
                  type="text"
                  className="bg-[#F8F9FA] rounded-lg p-3 border-0 w-[5.7rem] text-[14px]"
                  placeholder="Enter here"
                />
              </td>
              <td className="px-4 py-3 text-[14px] font-normal text-[#3E4B63]">
                <input
                  type="text"
                  className="bg-[#F8F9FA] rounded-lg p-3 border-0 w-[5.7rem] text-[14px]"
                  placeholder="Enter here"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
