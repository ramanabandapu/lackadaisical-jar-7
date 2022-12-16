import React from "react";
import {
  background,
  border,
  Box,
  Heading,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },

      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },

      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
      {/* Banner olx */}
      <Box>
        <Image src="https://statics.olx.in/olxin/banners/hero_bg_in_v3@1x.png" />
      </Box>
      {/* Craousal */}
      <Box pb="26px" bg={"#ebeeef"} w="80%" m="auto" border={"1px solid red"}>
        <Heading mb="20px" textAlign={"left"} size="lg">
          More on mercedes
        </Heading>
        <Carousel responsive={responsive}>
          <Box p={"8px"} bg="#fff" m={"5px"} boxShadow={"md"}>
            <Image
              m={"auto"}
              src="https://apollo-singapore.akamaized.net/v1/files/5ngbswv6jwi32-IN/image;s=300x600;q=60"
              alt="logo"
            />
            <Heading textAlign={"left"} as="h6" size={"lg"}>
              ₹2,00,000
            </Heading>
            <Text textAlign={"left"}>2017 - 165,000 km</Text>
            <Text textAlign={"left"}>
              <b> Mercedes Benz C-class</b>
            </Text>
          </Box>
          <Box p={"8px"} bg={"#fff"} m={"5px"} boxShadow={"md"}>
            <Image
              m={"auto"}
              src="https://apollo-singapore.akamaized.net/v1/files/5ngbswv6jwi32-IN/image;s=300x600;q=60"
              alt="logo"
            />
            <Heading textAlign={"left"} as="h6" size={"lg"}>
              ₹2,00,000
            </Heading>
            <Text textAlign={"left"}>2017 - 165,000 km</Text>
            <Text textAlign={"left"}>
              <b> Mercedes Benz C-class</b>
            </Text>
          </Box>
          <Box bg={"#fff"} p={"8px"} m={"5px"} boxShadow={"md"}>
            <Image
              m={"auto"}
              src="https://apollo-singapore.akamaized.net/v1/files/5ngbswv6jwi32-IN/image;s=300x600;q=60"
              alt="logo"
            />
            <Heading textAlign={"left"} as="h6" size={"lg"}>
              ₹2,00,000
            </Heading>
            <Text textAlign={"left"}>2017 - 165,000 km</Text>
            <Text textAlign={"left"}>
              <b> Mercedes Benz C-class</b>
            </Text>
          </Box>
          <Box bg={"#fff"} p={"8px"} m={"5px"} boxShadow={"md"}>
            <Image
              m={"auto"}
              src="https://apollo-singapore.akamaized.net/v1/files/5ngbswv6jwi32-IN/image;s=300x600;q=60"
              alt="logo"
            />
            <Heading textAlign={"left"} as="h6" size={"lg"}>
              ₹2,00,000
            </Heading>
            <Text textAlign={"left"}>2017 - 165,000 km</Text>
            <Text textAlign={"left"}>
              <b> Mercedes Benz C-class</b>
            </Text>
          </Box>
          <Box bg={"#fff"} p={"8px"} m={"5px"} boxShadow={"md"}>
            <Image
              m={"auto"}
              src="https://apollo-singapore.akamaized.net/v1/files/5ngbswv6jwi32-IN/image;s=300x600;q=60"
              alt="logo"
            />
            <Heading textAlign={"left"} as="h6" size={"lg"}>
              ₹2,00,000
            </Heading>
            <Text textAlign={"left"}>2017 - 165,000 km</Text>
            <Text textAlign={"left"}>
              <b> Mercedes Benz C-class</b>
            </Text>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
};

export default HomePage;
