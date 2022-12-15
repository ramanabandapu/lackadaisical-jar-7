import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
import SingleProductPage from "./SingleProductPage";

const MainRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page" element={<SingleProductPage />} />
      </Routes>
    </Box>
  );
};

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import SingleProductPage from "./SingleProductPage";

// const MainRoutes = () => {
//   return <Routes></Routes>;
// };

export default MainRoutes;
