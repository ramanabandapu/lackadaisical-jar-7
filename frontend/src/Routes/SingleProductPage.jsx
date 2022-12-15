import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SPImageCarousel from "../Components/SPImageCarousel";

const SingleProductPage = () => {
  return (
    <Box w="100%" h="100vh">
      <Box w="85%" margin="auto" display="flex">
        <Box w="60%" border="solid 1px red">
          <Box>
            <SPImageCarousel />
          </Box>
          <Box>
            <Box padding="5%" textAlign="left">
              <Text fontSize="20px" fontWeight={700}>
                Details:
              </Text>
              <Box display="flex" marginTop="10px">
                <Box w="25%" fontWeight={400} fontSize="14px" lineHeight="20px">
                  Brand
                </Box>
                <Box fontWeight={400} fontSize="14px" lineHeight="20px">
                  iphone
                </Box>
              </Box>
            </Box>
            <Box padding="5%" textAlign="left">
              <Text fontSize="20px" fontWeight={700}>
                Description:
              </Text>
              <Box display="flex" marginTop="10px">
                <Box fontWeight={400} fontSize="14px" lineHeight="40px">
                  <Text>
                    We deal in all refurbished iphones with great bargains
                  </Text>
                  <Text> All iphone models are available with us</Text>
                  <Text> COD available courier charges will be applicable</Text>
                  <Text> Contact us now for best offers</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

              <Box w="35%" border="solid 1px red">
                  
                  <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProductPage;
