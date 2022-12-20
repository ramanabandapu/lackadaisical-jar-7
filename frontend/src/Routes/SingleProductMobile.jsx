import { Box, Text, AspectRatio, Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SPImageCarousel from "../Components/SPImageCarousel";
import { FiShare2, FiHeart, FiChevronRight } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMobileData } from "../Redux/AppReducer/action";

const SingleProductMobile = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const [currentMobile, setCurrentMobile] = useState({});
  const mobiles = useSelector((state) => state.AppReducer.mobileData);
  useEffect(() => {
    if (mobiles.length === 0) {
      dispatch(getMobileData());
    }
  }, [dispatch, mobiles.length]);

  useEffect(() => {
    if (id) {
      const singlemobile = mobiles.find((item) => item._id === id);
      singlemobile && setCurrentMobile(singlemobile);
    }
  }, [id, mobiles]);


  const userarray = ["Rahul", "Rohit", "Surya", "Ravi", "Viru", "Sachin", "Saurav", "Bhuvi", "Jassi", "Kuldeep"];
  const n = Math.floor((Math.random() * 10) + 1);

  const user = userarray[n]

  const imgarry = [
    currentMobile.image,
    currentMobile.img1,
  ];

  return (
    <Box w="100%" bg="#F2F4F5" paddingBottom="20px" paddingTop="20px">
      <Box
        w="85%"
        margin="auto"
        display="flex"
        marginTop="20px"
        marginBottom="20px"
      >
        <Box w="60%">
          <Box>
            <SPImageCarousel
              arr={imgarry}
            />
          </Box>
          <Box
            bg="white"
            padding="5%"
            border="solid 1px gray"
            borderRadius="3px"
          >
            <Box textAlign="left">
              <Text fontSize="20px" fontWeight={700}>
                Details:
              </Text>
              <Box display="flex" marginTop="10px">
                <Box w="25%" fontWeight={400} fontSize="14px" lineHeight="20px">
                  Brand
                </Box>
                <Box fontWeight={400} fontSize="14px" lineHeight="20px">
                  {currentMobile.brand}
                </Box>
              </Box>
            </Box>
            <Divider marginY="20px" />
            <Box textAlign="left">
              <Text fontSize="20px" fontWeight={700}>
                Description:
              </Text>
              <Box display="flex" marginTop="10px">
                <Box fontWeight={400} fontSize="14px" lineHeight="40px">
                  <Text>{currentMobile.description}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box w="40%" padding="3%" textAlign="left" paddingTop={0}>
          <Box
            bg="white"
            padding="5%"
            border="solid 1px gray"
            borderRadius="3px"
          >
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Text fontSize="34px" fontWeight={700}>
                  {currentMobile.price}
                </Text>
              </Box>
              <Box display="flex" fontSize="28px" padding="3%" w="30%">
                <Box marginRight="30%">
                  <FiShare2 />
                </Box>
                <Box>
                  <FiHeart />
                </Box>
              </Box>
            </Box>
            <Box>
              <Text
                fontSize="16px"
                lineHeight="24px"
                color="#406367"
                fontWeight="500"
              >
                {currentMobile.name}
              </Text>
            </Box>
            <Box
              display="flex"
              color="#406367"
              fontSize="15px"
              justifyContent="space-between"
              marginTop="24px"
            >
              <Box>{currentMobile.location}</Box>
              <Box>23 Nov</Box>
            </Box>
          </Box>
          <Box
            bg="white"
            padding="5%"
            border="solid 1px gray"
            borderRadius="3px"
            marginTop="30px"
          >
            <Box>
              <Text
                fontSize="20px"
                lineHeight="24px"
                color="#002f34"
                fontWeight={450}
                textAlign="left"
              >
                Seller description
              </Text>
            </Box>
            <Box
              display="flex"
              height="50px"
              justifyContent="space-between"
              marginTop="15px"
            >
              <Box fontSize="50px">
                <RxAvatar />
              </Box>
              <Box textAlign="left">
                <Text fontSize="16px" color="#002f34" fontWeight={700}>
                 {user}
                </Text>
                <Text fontSize="12px" fontWeight={400} lineHeight="18px">
                  Member since 5 days ago
                </Text>
              </Box>
              <Box fontSize="35px">
                <FiChevronRight />
              </Box>
            </Box>
            <Box
              textAlign="center"
              fontSize="17px"
              fontWeight="bold"
              border="solid 2px black"
              padding="10px"
              borderRadius="5px"
              marginTop="15px"
            >
              Chat With Seller
            </Box>
          </Box>
          <Box
            bg="white"
            padding="5%"
            border="solid 1px gray"
            borderRadius="3px"
            marginTop="30px"
          >
            <Box>
              <Text textAlign="left" fontSize="20px" fontWeight={700}>
                Posted In
              </Text>
            </Box>
            <Box color="#406367" fontSize="13px" textAlign="left">
              {currentMobile.location}
            </Box>
            <Box>
              <Box w="100%" height="13rem" marginTop="10px">
                <AspectRatio ratio={16 / 9}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30756.50375331118!2d73.75699953284737!3d15.507922414129336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1a3ca96d9fb%3A0xd4400f3dbaa7b588!2sCandolim%2C%20Goa!5e0!3m2!1sen!2sin!4v1668232312390!5m2!1sen!2sin" />
                </AspectRatio>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProductMobile;
