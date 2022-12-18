import React, { useEffect, useState } from "react";
import {
  background,
  border,
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Img,
  SimpleGrid,
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

  const [mixdata, setMixdata] = useState([]);

  const homepageData = async () => {
    try {
      let mix = await fetch("https://exuberant-pantsuit-bat.cyclic.app/bikes");
      mix = await mix.json();

      console.log(mix);
      setMixdata(mix);
    } catch (Err) {
      console.log("Somthing went wrong");
      console.log(Err);
    }
  };
  useEffect(() => {
    homepageData();
  }, []);

  return (
    <Box mt={"7px"} mb="7px ">
      {/* big screen category */}
      <Box
        bg={"#ebeeef"}
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        p="10px"
        gap={"5px"}
        justifyContent={"space-evenly"}
      >
        <Box>Cars</Box>
        <Box maxH={"30px"} noOfLines={1}>
          Motorcycles
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          Mobile Phones
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          Apartments
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          OLX Renew
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          Scooters
        </Box>
        <Box maxH={"30px"} noOfLines={1}>
          Commercial Vehicles
        </Box>
        <Box maxH={"30px"} noOfLines={1} mr="100px">
          House & Apartments
        </Box>
      </Box>
      {/* small and medium screen catecory container */}
      <Box
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
        bg={"#ebeeef"}
        gap={"4px"}
        justifyContent="space-evenly"
      >
        <Box>Cars</Box>
        <Box maxW={"100px"} noOfLines={1}>
          Motorcycles
        </Box>
        <Box maxW={"100px"} noOfLines={1}>
          Mobile Phones
        </Box>
        <Box maxW={"100px"} noOfLines={1}>
          Apartments
        </Box>
        <Box maxW={"100px"} noOfLines={1}>
          OLX Renew
        </Box>
      </Box>
      <hr />
      <Box
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
        bg={"#ebeeef"}
        justifyContent="space-evenly"
      >
        <Box maxW={"100px"} noOfLines={1}>
          Scooters
        </Box>
        <Box maxW={"100px"} noOfLines={1}>
          Commercial Vehicles
        </Box>
        <Box maxW={"100px"} noOfLines={1}>
          House & Apartments
        </Box>
      </Box>
      {/* Banner olx */}
      <Box m={"20px 0px 90px 0px"}>
        <Image
          h={{ base: "60px", sm: "90px", md: "110px", lg: "140px" }}
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
      <Box width={"80%"} m="auto" mt={"50px"}>
        <Heading textAlign={"left"}>Fresh recommendations</Heading>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4 }} spacing={10}>
          {mixdata.map((elem) => {
            return (
              <Box key={elem._id} border={"1px solid gray"}>
                <Image
                  w={[200, 250, 280]}
                  h={"200px"}
                  src={elem.image}
                  alt="img"
                />
                <Heading
                  size={"90px"}
                  textAlign={"left"}
                >{`${elem.price}`}</Heading>
                <Text maxWidth={150} noOfLines={2}>
                  {elem.name}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HomePage;
