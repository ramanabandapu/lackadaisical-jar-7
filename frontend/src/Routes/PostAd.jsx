import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PostAd = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [img1, setImg1] = useState("");

  const handleSubmit = () => {
    const payload = {
      name,
      price,
      brand,
      location,
      description,

      image,
      img1,
    };

    axios
      .post("https://exuberant-pantsuit-bat.cyclic.app/mobiles", payload)
      .then((res) => {
        console.log(res);
        console.log(payload);
        if (res.status=== 200) {
          toast({
            title: "Mobile Ad Posted.",
            description: "Your ad is online.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Something went wrong.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      navigate("/");
    }, 3000);
    

    
  };

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
            <Text>Mobiles / Mobile Phones</Text>
          </Box>
          <Divider />
          <Box padding="3%" textAlign="left">
            <Box>
              <Text fontSize="20px" fontWeight={700}>
                INCLUDE SOME DETAILS
              </Text>
            </Box>
            <Box w="400px">
              <Text mt="20px">Name: </Text>
              <Input
                borderColor="black"
                mt="10px"
                placeholder="Ad Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Text mt="20px">Brand: </Text>
              <Input
                borderColor="black"
                mt="10px"
                placeholder="Brand Name"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />

              <Text mt="20px">Location: </Text>
              <Input
                borderColor="black"
                mt="10px"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <Text mt="20px">Description: </Text>
              <Textarea
                mt="10px"
                placeholder="Description"
                borderColor="black"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Text mt="20px" fontSize="20px" fontWeight={700}>
                Set A Price
              </Text>
              <Text mt="20px">Price: </Text>
              <InputGroup mt="10px">
                <InputLeftElement pointerEvents="none" children="₹" />
                <Input
                  borderColor="black"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </InputGroup>

              <Text mt="20px" fontSize="20px" fontWeight={700}>
                Upload Images
              </Text>
              <Input
                borderColor="black"
                mt="10px"
                placeholder="Image URL 1"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Input
                borderColor="black"
                mt="10px"
                placeholder="Image URL 2"
                value={img1}
                onChange={(e) => setImg1(e.target.value)}
              />
            </Box>
          </Box>
          <Divider />
          <Box padding="3%" textAlign="left">
            <Button
              colorScheme="teal"
              size="md"
              padding="5px 15px 5px 15px"
              onClick={handleSubmit}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostAd;
