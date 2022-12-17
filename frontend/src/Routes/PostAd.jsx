import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const PostAd = () => {
  return (
    <Box padding="3%">
      <Box margin="auto" fontSize="24px" fontWeight={700} my="15px">
        POST YOUR AD
      </Box>
      <Box>
        <Box border="solid 0.5px black" w="60%" margin="auto">
          <Box padding="3%" textAlign="left">
            <Text fontSize="20px" fontWeight={700}>
              SELECTED CATEGORY
            </Text>
            <Text>OLX Autos (Cars) / Cars</Text>
          </Box>
          <Divider />
          <Box padding="3%" textAlign="left">
            <Box>
              <Text fontSize="20px" fontWeight={700}>
                INCLUDE SOME DETAILS
              </Text>
            </Box>
            <Box w="400px">
              <Text mt="20px">Brand: </Text>
              <Input borderColor="black" mt="10px" placeholder="Brand Name" />
              <Text mt="20px" type="number">
                Year:{" "}
              </Text>
              <Input borderColor="black" mt="10px" placeholder="Year" />
              <Text mt="20px">Fuel: </Text>
              <Input borderColor="black" mt="10px" placeholder="Fuel" />
              <Text mt="20px">Transmission: </Text>
              <Input borderColor="black" mt="10px" placeholder="Transmission" />
              <Text mt="20px">KM Driven: </Text>
              <Input borderColor="black" mt="10px" placeholder="KMs" />
              <Text mt="20px">No. of Owners: </Text>
              <Input borderColor="black" mt="10px" placeholder=" No. Owners" />
              <Text mt="20px">Add Title: </Text>
              <Input borderColor="black" mt="10px" placeholder="Title" />
              <Text mt="20px">Description: </Text>
              <Textarea
                mt="10px"
                placeholder="Description"
                borderColor="black"
              />
              <Text mt="20px" fontSize="20px" fontWeight={700}>
                Set A Price
              </Text>
              <Text mt="20px">Price: </Text>
              <InputGroup mt="10px">
                <InputLeftElement pointerEvents="none" children="₹" />
                <Input borderColor="black" placeholder="Price" />
              </InputGroup>

              <Text mt="20px" fontSize="20px" fontWeight={700}>
                Upload Images
              </Text>
              <Input borderColor="black" mt="10px" placeholder="Image URL 1" />
              <Input borderColor="black" mt="10px" placeholder="Image URL 2" />
              <Input borderColor="black" mt="10px" placeholder="Image URL 3" />
            </Box>
          </Box>
          <Divider />
          <Box padding="3%" textAlign="left">
            <Button colorScheme="teal" size="md" padding="5px 15px 5px 15px">
              Post
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostAd;
