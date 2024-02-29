import React, { useState } from 'react';

const SellerCenterQuotationProductsCards = () => {
  const [count, setCount] = useState(0);
  return (
      <div className="flex flex-col bg-[#fff] rounded-xl p-4 min-w-[350px] max-w-[350px]">
        <div className="flex items-center justify-between min-w-full">
          <div className="bg-[#EEF5F0] rounded-md py-2 px-4 text-[#519C66] text-[12px] font-inter">
            Last Updated : <b>8 days ago</b>
          </div>
          <div className="border-[1.0px] border-[#B4B9C3] p-2 rounded-[3px]"></div>
        </div>

        <h3 className="product-title text-[20px] text-[#3E4B63] font-semibold font-inter mt-6">
          World East 12N6.5-BS
          <br /> (6.5 AH)
        </h3>

        <div className="product-details flex flex-wrap gap-[6px] mt-5">
          <div className="border-[.5px] border-[#F8F9FC] p-3 rounded-md w-[48%] flex flex-col gap-1">
            <span className="text-[#707FE2] text-[14px] font-inter font-medium">
              Price
            </span>
            <span className="text-[16px] text-[#5E687C] font-inter">
              6.76 $
            </span>
          </div>
          <div className="border-[.5px] border-[#F8F9FC] p-3 rounded-md w-[48%] flex flex-col gap-1">
            <span className="text-[#74B085] text-[14px] font-inter font-medium">
              In stock
            </span>
            <span className="text-[16px] text-[#5E687C] font-inter">
              13345 nos
            </span>
          </div>
        </div>

        <div className="product-img flex items-center justify-center h-[160px] border-[.5px] border-[#F8F9FC] p-5 mt-6">
          <img
            width={170}
            height={140}
            src="https://s3-alpha-sig.figma.com/img/baf5/3378/a263061d70befa393a012ed367fb0017?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgB2F~Qgf8hm04NzgUNQLjB2IirPuGrB6~dKwmrKOBJ5Wl6a5stXD~wE75Xrx5JhDKGc8WhCeO4hgeji2MrSBfmYjiMBQXeVAR1ft2f6dWoxxheh3fGbwHP5PrM8emkXIxTzrUBVTt7VSgKqDEvPFlnyMpKe9nREth7bUKTED0qZzOz5XlwJlT3GdiMZz1txIFWSIXXWZAitG2UGWPv9urWpgPUUTydpSjmz6jiC4nnokbVgtRaw-h6OF4c-hfPf0OAhCGCJWoIqmc2DCUGb9amwrXlJe06vvQ2ztlHcJw32x7p6iiVRTimOgfvWHiA1rwUNsbFtpBSlrw0iv4WQbg__"
          />
        </div>
      </div>
  );
};

export default SellerCenterQuotationProductsCards;