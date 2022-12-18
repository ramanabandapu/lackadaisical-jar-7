import React from "react";
import {
  Box,
  Image,
  Select,
  Input,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { SignupDrawer } from "./SignupDrawer";

const Navbar = () => {
  return (
    <Box
      pos="fixed"
      top={0}
      w="100%"
      display={"block"}
      overflow={"hidden"}
      bg="#eff1f3"
      border="1px solid red"
    >
      <Box
        border="1px solid green"
        justifyContent="space-evenly"
        justifyItems="center"
        display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
        textAlign="center"
        alignItems="center"
      >
        {/* <Box border="1px solid teal"> */}
        {/* Logo */}

        {/* <Link to="/"> */}
          <Image
          cursor="pointer"
          w="5%"
          src="https://i.postimg.cc/ZKMkM2G6/Online-Exchange-removebg-preview.png"
          alt="logo"
        />
       
        
        {/* </Link> */}
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
          w={{ base: "20%", sm: "20%", md: "30%", lg: "50%" }}
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
      
          <Text>
          <SignupDrawer/>
           
            </Text>
          

        </Box>
        <Box cursor="pointer">
          <Image
            w="80px"
            borderRadius={"50px 50px 50px 50px"}
            src="https://i.postimg.cc/x16tr9LW/186889937-a920358d-9d24-41dd-b3e3-9de04f0082dc-removebg-preview.png"
            alt="seal"
          />
        </Box>
      </Box>
      {/* nvbar for small screen */}
      <Box
        p={"5px"}
        display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}
        justifyContent={"space-evenly"}
        // justifyItems={"center"}
      >
        {/* logo */}
        <Image
          cursor="pointer"
          w="13%"
          src="https://i.postimg.cc/ZKMkM2G6/Online-Exchange-removebg-preview.png"
          alt="logo"
        />
        <Box
          border="1px solid blue"
          bg="blue"
          borderRadius="7px"
          display="flex"
          h={"42px"}
          w={"60%"}
          m="auto"

          // w={{ base: "20%", sm: "20%", md: "30%", lg: "50%" }}
        >
          <Input
            bg="white"
            p="10px"
            // h={"99%"}
            placeholder="Find Cars, Bike, Mobile, Furniture"
          />
          <IconButton
            // mb="3px"
            // h="40px"
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </Box>
        {/* hamburger icon */}
        <Box margin={"auto"} border="0.5px solid #90CDF4" borderRadius={"3px"}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>Sign Up</MenuItem>
              {/* location option */}
              {/* w="15%" h="80%" border="1px solid black" */}
              <MenuItem>
                <Box>
                  <Select
                    bg="whiteAlpha.800"
                    w="100%"
                    // cursor="pointer"
                    placeholder="Patna"
                  >
                    <option value="delhi">Delhi</option>
                    <option value="banglore">Banglore</option>
                    <option value="patna">Patna</option>
                  </Select>
                </Box>
              </MenuItem>
              <MenuItem>SELL</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
