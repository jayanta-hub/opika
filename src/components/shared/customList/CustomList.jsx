import React, { memo } from "react";
import { Box, CustomButton } from "../../index.jsx";
const CustomList = ({
  currentItems = [],
  onClick = () => {},
  toggleCompleted = () => {},
}) => {
  console.log("CustomList", currentItems);
  return (
    <Box className="max-w-md mx-auto overflow-hidden md:max-w-2xl py-3">
      <ul className="flex flex-col gap-2">
        {currentItems?.map((task, index) => (
          <li
            key={index}
            className="max-w-md md:max-w-2xl mx-auto bg-blue-200 rounded-xl shadow-md overflow-hidden flex justify-between items-center px-2 py-2 w-full"
          >
            <Box className="flex justify-center items-center max-w-50 flex-wrap">
              <input
                type="checkbox"
                checked={task?.isCompleted}
                onChange={() => toggleCompleted(index)}
                className="w-5 h-5"
              />
            </Box>
            <Box className="flex justify-stretch w-full flex-wrap px-2 text-wrap">
              <h5 className="font-sans text-justify ">{task?.text}</h5>
            </Box>
            <Box className="flex justify-center items-center max-w-50 flex-wrap min-h-full">
              <CustomButton
                title="Delete"
                onClick={() => onClick(index)}
                className="rounded-md bg-red-500 py-1 px-1 text-white font-sans"
              />
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default memo(CustomList);
