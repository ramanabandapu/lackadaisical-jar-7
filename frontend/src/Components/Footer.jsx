import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsInstagram, BsPlayBtn, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Box  bg="#ebeeef" p={[0, 3, 2, 10]} mt={"50px"}>
      <Box
        ml={[0, 70, 120]}
        display="flex"
        padding={"10px"}
        justifyContent="space-between"
      >
        <Box textAlign="left">
          <Heading mb={"20px"} size="sm">
            POPULAR LOCATION
          </Heading>
          <Text color={"rgba(0,47,52,.64)"}>Kolkata</Text>
          <Text color={"rgba(0,47,52,.64)"}>Mumbai</Text>
          <Text color={"rgba(0,47,52,.64)"}>Chennai</Text>
          <Text color={"rgba(0,47,52,.64)"}>Pune</Text>
        </Box>
        <Box textAlign="left">
          <Heading mb={"20px"} size="sm">
            TRENDING LOCATIONS
          </Heading>
          <Text color={"rgba(0,47,52,.64)"}>Bhubneshwar</Text>
          <Text color={"rgba(0,47,52,.64)"}>Hydrabad</Text>
          <Text color={"rgba(0,47,52,.64)"}>Chandigarh</Text>
          <Text color={"rgba(0,47,52,.64)"}>Nashi</Text>
        </Box>
        <Box textAlign="left">
          <Heading mb={"20px"} size="sm">
            ABOUT US
          </Heading>
          <Text color={"rgba(0,47,52,.64)"}>About OLX Group</Text>
          <Text color={"rgba(0,47,52,.64)"}>Careers</Text>
          <Text color={"rgba(0,47,52,.64)"}>Contact Us</Text>
          <Text color={"rgba(0,47,52,.64)"}>OLXPeople</Text>
          <Text color={"rgba(0,47,52,.64)"}>Waah Jobs</Text>
        </Box>
        <Box textAlign="left">
          <Heading mb={"20px"} size="sm">
            OLX
          </Heading>
          <Text color={"rgba(0,47,52,.64)"}>Help</Text>
          <Text color={"rgba(0,47,52,.64)"}>Sitemap</Text>
          <Text maxWidth={"70px"} noOfLines={1} color={"rgba(0,47,52,.64)"}>
            Legal & Privacy information
          </Text>
          <Text color={"rgba(0,47,52,.64)"}>Blog</Text>
          <Text color={"rgba(0,47,52,.64)"}>OLX Autos Sell Car</Text>
        </Box>
        <Box
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
          lineHeight={"10px"}
        >
          <Heading size="sm">GET YOUR APP TODAY</Heading>
          <Box>
            <Heading m="10px 0px 10px" size="sm" textAlign="left">
              Follow us
            </Heading>
            <Box m="10px 0px 10px" display="flex" gap="20px">
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
              <BsPlayBtn />
            </Box>
            <Box m="30px 0px 100px" display="flex" gap="10px">
              <Image src="https://statics.olx.in/external/base/img/playstore.png" />
              <Image src="https://statics.olx.in/external/base/img/appstore.webp" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
