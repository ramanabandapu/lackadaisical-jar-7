import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Car from "../Components/ankesh_work/Car";
import Mobile from "../Components/ankesh_work/Mobile";
import Motor from "../Components/ankesh_work/Motor";
import HomePage from "../Components/HomePage";
import PostAd from "./PostAd";
import SingleProductMobile from "./SingleProductMobile";
import SingleProductCar from "./SingleProductCar";
import SingleProductBike from "./SingleProductBike";

const MainRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mobiles/:id" element={<SingleProductMobile />} />
        <Route path="/cars/:id" element={<SingleProductCar />} />
        <Route path="/bikes/:id" element={<SingleProductBike />} />
        <Route path="/postad" element={<PostAd />} />

        <Route path="/car" element={<Car />} />
        <Route path="/motor" element={<Motor />} />
        <Route path="/mobile" element={<Mobile />} />
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
