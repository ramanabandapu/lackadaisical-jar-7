import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Car from "../Components/ankesh_work/Car";
import Mobile from "../Components/ankesh_work/Mobile";
import Motor from "../Components/ankesh_work/Motor";
import HomePage from "../Components/HomePage";
import SingleProductPage from "./SingleProductPage";

const MainRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page" element={<SingleProductPage />} />
        <Route path="/car" element={<Car/>}/>
        <Route path="/motor" element={<Motor/>}/>
        <Route path="/mobile" element={<Mobile/>}/>
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
