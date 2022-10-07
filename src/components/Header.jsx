import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Header() {
  let navigate = useNavigate();

  const getStartedClickHandler = () => {
    navigate("/niyamtaker");
  };

  return (
    <>
      <Flex
        flexDir="column"
        margin="25px"
        marginTop="5rem"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gap="20px"
      >
        <Box fontWeight="bold" fontSize="6xl">
          JinSwara Niyam
          <span style={{ color: "var(--primary-color)" }}> Taker</span>
        </Box>
        <Box color="var(--secondary-text)">Samyak Shah</Box>
        <button onClick={getStartedClickHandler} className="css-wwtv31">
          Get Started
        </button>
      </Flex>
    </>
  );
}
