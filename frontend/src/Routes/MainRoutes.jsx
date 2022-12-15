import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";

const MainRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
