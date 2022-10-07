import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NiyamTakeHeader from "../components/NiyamTakeHeader";
import ReactConfetti from "react-confetti";
import { Box } from "@chakra-ui/react";

export default function NiyamTakerPage() {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [btn, setBtn] = useState(false);

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <NiyamTakeHeader />
      {/* <button onClick={() => setBtn(!btn)}>Run confetti</button> */}
      {btn && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={1000}
        />
      )}
    </>
  );
}
