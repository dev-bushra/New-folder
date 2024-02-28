import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";
// import { FaIconRight } from "./FaIconRight"; // Import the right icon component from react-icons/fa
import { IoArrowBackCircle } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      eyeIcon, // Add a prop for the right icon
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <div className="relative w-full">
            <input
              ref={ref}
              className={`${className} bg-transparent border-0 pr-8`} // Adjust padding to accommodate the right icon
              type={type}
              name={name}
              onChange={handleChange}
              placeholder={placeholder}
              {...restProps}
            />
            {!!eyeIcon && (
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <IoEyeOutline size={18} color="#9098A5" />
              </div>
            )}
          </div>
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  eyeIcon: PropTypes.element, // Prop for the right icon component
};

export { Input };
