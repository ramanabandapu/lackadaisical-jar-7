import React from 'react'
import Car from '../Components/Car'
import Motor from '../Components/Motor'

import { Route, Routes } from "react-router-dom";

import { Box } from "@chakra-ui/react";
const MainRoutes = () => {
  return (
    <Box>
      <Routes>
       <Route path="/car" element={<Car/>}></Route>
       <Route path="/motor" element={<Motor/>}></Route>  
      </Routes>
    </Box>
  )
}

export default MainRoutes