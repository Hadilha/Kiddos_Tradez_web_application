import { Box } from "@mui/material";
import React from "react";
const Descriptionabus = () => {
  return (
    <Box
      style={{
        marginTop: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          // marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "800px",
          overflow: "auto",
        }}
      >
        <h1 style={{ color: "#810CA8" }}>Welcome to Kiddos Tradezz,</h1>
        <p
          style={{
            lineHeight: "1.2",
            color: " #080808",
            fontFamily: "Arial, sans-seriff",
            fontWeight: "500 px",
            lineHeight: "32px",
            margin: " 0 0 24px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <p
            style={{
              lineHeight: "1.2",
              color: " #080808",
              fontFamily: "Arial, sans-serif",
              fontSize: "19px",
              fontWeight: "500 px",
              lineHeight: "32px",
              margin: " 0 0 24px",
              textAlign: "center",
            }}
          >
            The online toy sales and trading platform that brings parents and
            children together!
          </p>
          We are a community of toy enthusiasts who love sharing and discovering
          new treasures.
          <br /> Our marketplace offers a wide selection of quality toys for
          kids of all ages.
          <br /> We pride ourselves on providing a safe and fun environment for
          kids to swap their favorite toys with other kids. <br /> At Kiddos
          Tradezz, we believe that every toy has a story and we're here to help
          create unforgettable memories. <br />
          Join our community today and discover a new way to play with Kiddos
          Tradezz!
        </p>
      </Box>
    </Box>
  );
};

export default Descriptionabus;
