import React from "react";
import { Box, TaskList } from "../../components/index.jsx";

const Dashboard = () => {
  return (
    <Box className="container items-center py-5">
      <TaskList />
    </Box>
  );
};

export default Dashboard;
