import React from "react";
const CustomButton = ({
  onClick = () => {},
  title = "",
  className = "",
  style = {},
  bg = "",
  icon = null,
}) => {
  return (
    <button
      className={
        className !== ""
          ? className
          : "bg-blue-500 rounded py-1 px-1 text-white min-w-20 hover:bg-blue-400 self-auto"
      }
      style={{ ...style, backgroundColor: bg }}
      onClick={onClick}
      type="button"
    >
      {icon ?? title}
    </button>
  );
};

export default CustomButton;
