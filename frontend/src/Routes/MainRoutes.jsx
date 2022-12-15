
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

import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SingleProductPage from './SingleProductPage';

const MainRoutes = () => {
  
    return (
      <Routes>
        <Route path="/page" element={<SingleProductPage />} />
      </Routes>
    );
}


export default MainRoutes;
