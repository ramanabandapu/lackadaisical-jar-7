import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SPImageCarousel() {
  const [slider, setSlider] = useState();
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    "https://apollo-singapore.akamaized.net/v1/files/wtr0pvwqc4qs3-IN/image;s=780x0;q=60",
    "https://apollo-singapore.akamaized.net/v1/files/qbd97uxp2np23-IN/image;s=780x0;q=60",
    "https://apollo-singapore.akamaized.net/v1/files/urz9b43pvnyk1-IN/image;s=780x0;q=60",
    "https://apollo-singapore.akamaized.net/v1/files/ab9wrcbw6ibn3-IN/image;s=780x0;q=60",
  ];

  return (
    <Box
      position={"relative"}
      height={"100%"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        size="xs"
        aria-label="left-arrow"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <AiOutlineLeft />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        size="xs"
        aria-label="right-arrow"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <AiOutlineRight />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            border="solid 1px red"
            key={index}
            width="100%"
            h="25rem"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
