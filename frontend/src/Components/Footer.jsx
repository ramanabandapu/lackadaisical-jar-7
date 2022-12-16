import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsInstagram, BsPlayBtn, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Box bg="#ebeeef">
      <Box
        m="0px 150px 0px 150px"
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
          <Heading mb={"20px"} size="md">
            TRENDING LOCATIONS
          </Heading>
          <Text color={"rgba(0,47,52,.64)"}>Bhubneshwar</Text>
          <Text color={"rgba(0,47,52,.64)"}>Hydrabad</Text>
          <Text color={"rgba(0,47,52,.64)"}>Chandigarh</Text>
          <Text color={"rgba(0,47,52,.64)"}>Nashi</Text>
        </Box>
        <Box textAlign="left">
          <Heading mb={"20px"} size="md">
            ABOUT US
          </Heading>
          <Text color={"rgba(0,47,52,.64)"}>About OLX Group</Text>
          <Text color={"rgba(0,47,52,.64)"}>Careers</Text>
          <Text color={"rgba(0,47,52,.64)"}>Contact Us</Text>
          <Text color={"rgba(0,47,52,.64)"}>OLXPeople</Text>
          <Text color={"rgba(0,47,52,.64)"}>Waah Jobs</Text>
        </Box>
        <Box textAlign="left">
          <Heading mb={"20px"} size="md">
            OLX
          </Heading>
          <Text color={"rgba(0,47,52,.64)"}>Help</Text>
          <Text color={"rgba(0,47,52,.64)"}>Sitemap</Text>
          <Text color={"rgba(0,47,52,.64)"}>Legal & Privacy information</Text>
          <Text color={"rgba(0,47,52,.64)"}>Blog</Text>
          <Text color={"rgba(0,47,52,.64)"}>OLX Autos Sell Car</Text>
        </Box>
        <Box lineHeight={"10px"}>
          <Heading size="md">GET YOUR APP TODAY</Heading>
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
              <Image src="https://statics.olx.in/external/base/img/playstore.png" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
