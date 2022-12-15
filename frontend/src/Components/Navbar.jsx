import React from "react";
import { Box, Image, Select, Input, Text, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box bg="#eff1f3" border="1px solid red">
      <Box
        border="1px solid green"
        justifyContent="space-evenly"
        justifyItems="center"
        display="flex"
        textAlign="center"
        alignItems="center"
      >
        {/* <Box border="1px solid teal"> */}
        {/* Logo */}
        <Image
          cursor="pointer"
          w="5%"
          src="https://i.postimg.cc/ZKMkM2G6/Online-Exchange-removebg-preview.png"
          alt="logo"
        />
        {/* </Box> */}
        {/* Location Box */}
        <Box w="15%" h="80%" border="1px solid black">
          <Select
            bg="whiteAlpha.800"
            // w="15%"
            cursor="pointer"
            placeholder="India"
          >
            <option value="option1">Delhi</option>
            <option value="option2">Banglore</option>
            <option value="option3">Patna</option>
          </Select>
        </Box>
        {/*Search Box *****************************************/}
        <Box
          border="1px solid blue"
          bg="blue"
          borderRadius="7px"
          display="flex"
          w="50%"
        >
          <Input
            bg="white"
            p="15px"
            h={"60%"}
            placeholder="Find Cars, Bike, Mobile, Furniture"
          />
          <IconButton
            // mb="3px"
            h="53px"
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </Box>
        <Box cursor="pointer">
          <Text>Sign Up</Text>
        </Box>
        <Box cursor="pointer">
          <Text>Login</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
