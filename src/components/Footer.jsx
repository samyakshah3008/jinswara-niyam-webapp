import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import {
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsYoutube,
  BsWhatsapp,
} from "react-icons/bs";
import { FaQuora } from "react-icons/fa";
import "./styles.css";

export default function Footer() {
  return (
    <>
      <hr className="hr-line"></hr>

      <Flex
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        flexDirection="column"
        marginTop="3.5rem"
        gap="15px"
      >
        <Flex gap="10px">
          <Box>Terms</Box>
          <Box>Privacy Policy</Box>
          <Box>Refund Policy</Box>
          <Box>Community Guidelines</Box>
        </Flex>
        <Flex>
          <Box>© Jinswara. All rights reserved</Box>
        </Flex>
        <Flex gap="10px">
          <BsTwitter cursor="pointer" />
          <BsGithub cursor="pointer" />
          <BsInstagram cursor="pointer" />
          <BsYoutube cursor="pointer" />
          <BsWhatsapp cursor="pointer" />
          <FaQuora cursor="pointer" />
        </Flex>
      </Flex>
    </>
  );
}
