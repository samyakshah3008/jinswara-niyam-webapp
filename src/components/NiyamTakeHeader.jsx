import { Flex, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import "./styles.css";

export default function NiyamTakeHeader() {
  const [niyam, setNiyam] = useState("");

  const takeNiyamHandler = () => {
    const niyamDB = [
      "Niyam 1 will appear here",
      "Niyam 2 will appear here",
      "Niyam 3 will appear here",
      "Niyam 4 will appear here",
      "Niyam 5 will appear here",
      "Niyam 6 will appear here",
      "Niyam 7 will appear here",
      "Niyam 8 will appear here",
      "Niyam 9 will appear here",
      "Niyam 10 will appear here",
      "Niyam 11 will appear here",
      "Niyam 12 will appear here",
      "Niyam 13 will appear here",
      "Niyam 14 will appear here",
      "Niyam 15 will appear here",
      "Niyam 16 will appear here",
      "Niyam 17 will appear here",
      "Niyam 18 will appear here",
      "Niyam 19 will appear here",
      "Niyam 20 will appear here",
    ];

    let gotNiyam = niyamDB[Math.floor(Math.random() * niyamDB.length)];

    setNiyam(gotNiyam);
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
        <button onClick={takeNiyamHandler} className="css-wwtv31 top-up">
          Take Niyam
        </button>
        <Box fontWeight="bold" fontSize="3xl" marginTop="7rem">
          {niyam}
        </Box>
      </Flex>
    </>
  );
}
