import React from "react";

const sizeClasses = {
  txtInterSmall12: "font-inter font-medium text-sm",
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterBold10: "font-bold font-inter",
  txtInterMedium28: "font-inter font-medium",
  txtPlusJakartaSansExtraBoldItalic56:
    "font-extrabold font-plusjakartasans italic",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
