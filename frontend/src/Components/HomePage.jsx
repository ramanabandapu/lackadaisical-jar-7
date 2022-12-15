import { Box, Image } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <Box mt={"7px"} mb="7px ">
      <Box
        bg={"#ebeeef"}
        display={"flex"}
        p="10px"
        justifyContent={"space-between"}
      >
        <Box ml="100px">Cars</Box>
        <Box>Motorcycles</Box>
        <Box>Mobile Phones</Box>
        <Box>For Sale: House & Apartments</Box>
        <Box>OLX Renew (Mobile)</Box>
        <Box>Scooters</Box>
        <Box>Commercial & Other Vehicles</Box>
        <Box mr="100px">For Rent : House & Apartments</Box>
      </Box>
      <Box>
        <Image src="https://statics.olx.in/olxin/banners/hero_bg_in_v3@1x.png" />
      </Box>
    </Box>
  );
};

export default HomePage;
