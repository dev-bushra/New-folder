import React, { useState } from 'react';

const HomeProductsCards = () => {
  const [count, setCount] = useState(0);
  return (
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
  );
};

export default HomeProductsCards;