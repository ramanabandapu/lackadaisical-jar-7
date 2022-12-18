import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./HomeSection.module.css";

import Login from "./Login";
import { SignupDrawer } from "./SignupDrawer";
import { saveData } from "../Utils/localStorage";
import { accessData } from "../Utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../Redux/AuthReducer/action";
// import { HamburgerMenu } from "./HamburgerMenu";

const HomeSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarRef = React.useRef();
  const [isVisible, setisVisible] = useState();
  const isAuth = accessData("isAuth");

  const data = useSelector((state) => {
    return state.reducer;
  });
  // console.log(data);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log(windowSize);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setisVisible(entry.isIntersecting);
    });
    observer.observe(navbarRef.current);
  }, []);

  return (
    <Box ref={navbarRef}>
      <Box className={styles.homeSection}>
        {/* Top Navbar Starts */}
        {windowSize.innerWidth > 640 ? (
          <Flex className={styles.topNavbar}>
            <Flex className={styles.linksDiv}>
              {/* <Text style={{ cursor: "pointer" }} onClick={onOpen}> */}
              {!data.isAuth ? (
                <Text style={{ cursor: "pointer" }} onClick={onOpen}>
                  {" "}
                  Login/SignUp{" "}
                </Text>
              ) : (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap="5px"
                >
                  {" "}
                  <Avatar
                    bg="blackAlpha.800"
                    name={data.name}
                    color="white"
                    src="https://bit.ly/broken-link"
                    size="sm"
                  />
                  <b>{data.name}</b>{" "}
                  <Button
                    bg={"black"}
                    ml="30px"
                    onClick={handleLogout}
                    className="black-button"
                  >
                    Logout
                  </Button>
                </Box>
              )}
              {/* </Text> */}
              {/* Drawer Start */}
              <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader borderBottomWidth="1px">
                    Log in to your account
                  </DrawerHeader>
                  <DrawerBody>
                    <Stack spacing="24px">
                      <Box>
                        <Login onClose={onClose} />
                        <br />
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          gap="20px"
                        >
                          Don't have an account? <SignupDrawer />
                        </Box>
                      </Box>
                    </Stack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
              {/* Drawer End */}
            </Flex>
          </Flex>
        ):null}
      </Box>
    </Box>
  );
};

export default HomeSection;
