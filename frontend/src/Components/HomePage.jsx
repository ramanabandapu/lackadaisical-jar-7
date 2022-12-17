import React from "react";
import {
  background,
  border,
  Box,
  Grid,
  GridItem,
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

  const mobileData = [
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
    {
      name: "Mercedies",
      price: "₹ 8,00,00,000 ",
      imgUrl:
        "https://apollo-singapore.akamaized.net/v1/files/z3cykn85bzyr3-IN/image;s=300x600;q=60",
    },
  ];

  return (
    <Box mt={"7px"} mb="7px ">
      <Box
        bg={"#ebeeef"}
        display={"flex"}
        p="10px"
        justifyContent={"space-between"}
      >
        <Box ml="100px">Cars</Box>
        <Box ml={"20px"} maxH={"30px"} noOfLines={1}>
          Motorcycles
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          Mobile Phones
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          For Sale: House & Apartments
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          OLX Renew (Mobile)
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          Scooters
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          Commercial & Other Vehicles
        </Box>
        <Box maxH={"30px"} noOfLines={1} mr="100px">
          For Rent : House & Apartments
        </Box>
      </Box>
      {/* Banner olx */}
      <Box m={"20px 0px 90px 0px"}>
        <Image
          h={"160px"}
          src="https://statics.olx.in/olxin/banners/hero_bg_in_v3@1x.png"
        />
      </Box>
      {/* Craousal */}
      <Box
        pl={"20px"}
        pr="20px"
        pb="26px"
        bg={"#ebeeef"}
        w="80%"
        m="auto"
        // border={"1px solid red"}
      >
        <Heading mb="20px" textAlign={"left"} size="lg">
          More on mercedes
        </Heading>
        <Carousel responsive={responsive}>
          <Box h={"330px"} p={"8px"} bg="#fff" m={"5px"} boxShadow={"md"}>
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
          <Box h={"330px"} p={"8px"} bg={"#fff"} m={"5px"} boxShadow={"md"}>
            <Image
              m={"auto"}
              src="https://apollo-singapore.akamaized.net/v1/files/o7qukldrwqd8-IN/image;s=300x600;q=60"
              alt="logo"
            />
            <Heading textAlign={"left"} as="h6" size={"lg"}>
              ₹2,00,000
            </Heading>
            <Text textAlign={"left"}>2017 - 165,000 km</Text>
            <Text textAlign={"left"}>
              <b> Mercedes-Benz Cla (2016)</b>
            </Text>
          </Box>
          <Box h={"330px"} bg={"#fff"} p={"8px"} m={"5px"} boxShadow={"md"}>
            <Image
              m={"auto"}
              src="https://apollo-singapore.akamaized.net/v1/files/d0r6zwha2g933-IN/image;s=300x600;q=60"
              alt="logo"
            />
            <Heading textAlign={"left"} as="h6" size={"lg"}>
              ₹38,00,000
            </Heading>
            <Text textAlign={"left"}>2019 - 21,000 km</Text>
            <Text textAlign={"left"}>
              <b> Mercedes Benz C-class</b>
            </Text>
          </Box>
          <Box h={"330px"} bg={"#fff"} p={"8px"} m={"5px"} boxShadow={"md"}>
            <Image
              m={"auto"}
              src="https://apollo-singapore.akamaized.net/v1/files/15h0ziwg5gcw2-IN/image;s=300x600;q=60"
              alt="logo"
            />
            <Heading textAlign={"left"} as="h6" size={"lg"}>
              ₹64,00,000
            </Heading>
            <Text textAlign={"left"}>2022 - 1,000 km</Text>
            <Text textAlign={"left"}>
              <b> Mercedes Benz C-class</b>
            </Text>
          </Box>
          <Box h={"330px"} bg={"#fff"} p={"8px"} m={"5px"} boxShadow={"md"}>
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

      {/*-------------- Fresh recommendations----------------------------------------------------- */}
      <Box  width={"80%"} m="auto" mt={"50px"}>
        <Heading textAlign={"left"}>Fresh recommendations</Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {mobileData &&
            mobileData.length > 0 &&
            mobileData.map((elem) => {
              return (
                <GridItem
                  // border={".5px solid gray"}
                  // p={"15px"}
                  boxShadow={
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
                  }
                >
                  <Image m={"auto"} mt="10px" src={elem.imgUrl} />
                  <Heading>{elem.name}</Heading>
                  <Text>{elem.price}</Text>
                </GridItem>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
