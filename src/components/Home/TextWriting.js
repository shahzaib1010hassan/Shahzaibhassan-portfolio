import React from "react";
import Typewriter from "typewriter-effect";

export default function TextWriting() {
  return (
    <Typewriter
      options={{
        strings: [
          "I Build Front End For Web.",
          "Jr. Front End Developer",
          "React And React Native Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
