import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { GrCircleInformation } from "react-icons/gr";
import { HiInformationCircle } from "react-icons/hi";
export default function Navbar() {
  return (
    <>
      <nav>
        <Flex
          margin="25px"
          h={20}
          justifyContent="space-between"
          fontSize="18px"
          color="#4299E1"
          fontWeight="bold"
          // border="2px solid red"
        >
          <Box cursor="pointer" color="var(--primary-color)">
            How to Play?
          </Box>
          <Box cursor="pointer" fontWeight="bold" color="var(--primary-color)">
            Jinswara Niyam WebApp
          </Box>
          <Flex color="var(--primary-color)" gap="25px">
            <Box cursor="pointer" color="var(--primary-color)">
              Statistics
            </Box>
            <Box cursor="pointer" color="var(--primary-color)">
              Settings
            </Box>
          </Flex>
        </Flex>
      </nav>
    </>
  );
}
