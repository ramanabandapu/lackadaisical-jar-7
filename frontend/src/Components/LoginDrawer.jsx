import Login from "./Login";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const LoginDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Text
        style={{ cursor: "pointer" }}
        ref={btnRef}
        onClick={onOpen}
        color="black"
      >
        Login
      </Text>
      {/* Drawer Start */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Login Here</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <Login onClose={onClose} />
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
