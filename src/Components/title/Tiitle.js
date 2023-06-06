import "./Title.css";
import useWindowDimensions from "../../hooks/useWindowDimension";
import Typewriter from "typewriter-effect";
import React from "react";
import Box from "@mui/material/Box";

function Title() {
  return (
    <Box
      className="ph"
      style={{
        //marginTop: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box className="dynamictitle" style={{ alignItems: "center" }}>
          WE ARE
        </Box>
        <br />
        <Box className="dynamictitle2">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Interactive",
                "Varied",
                "Well-organized",
                "Educational",
                "Enjoyable",
                "profitable",
                "exciting",
              ],
            }}
          />
        </Box>
        <br />
        <div className="dynamictitle">We are Kiddos Tradez</div>
      </Box>
    </Box>
  );
}

export default Title;
