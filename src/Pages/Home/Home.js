import React, { useEffect } from "react";
import backgroundImage from "../../Asserts/Logos/glassy.png";
import bubles from "../../Asserts/Images/bubles.png";

import "./Home.css";
import toys from "../../Asserts/Logos/toys.png";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { getAllAnnonces } from "../../services/AnnonceService";
import Navbarheader from "../../Components/Navbarheader/Navbarheader";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "scale(1.2)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000 },
  });
  const [list, setList] = useState();

  useEffect(() => {
    getAllAnnonces()
      .then((data) => {
        console.log("data", data);
        const newList = data;
        setList(newList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Box>
        <Box
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
          }}
        >
          <Navbarheader style={{ width: "100%", height: "200px" }} />
          <div style={{ display: "flex", justifyContent: "column" }}>
            <animated.div
              className="photo-background"
              style={{
                backgroundImage: `url(${bubles})`,
                backgroundSize: "cover",
                height: "110vh",
                width: "100%",
                position: "absolute",
                //top: 0,
                left: 0,
                animation: "moveUpDown 5s infinite",
              }}
            />
            <Box
              sx={{
                height: "700px",
                width: "100%",
                //backgroundColor: "green",
                display: "flex",
                alignItems: "center",
                padding: "80px",
                // display: "flex",
                justifyContent: "column",
              }}
            >
              <Grid2 className="descriptiongrid" xs>
                <motion.div
                  animate={{ y: "-5vh " }}
                  transition={{ duration: 1.5 }}
                >
                  <h2
                    style={{
                      fontFamily: "Arial Black",
                      color: "white",
                      padding: "0px",
                      textAlign: "left",
                      marginLeft: "0px",
                    }}
                  >
                    Looking for a hassle-free way to
                    <br /> buy, sell, or exchange toys?
                  </h2>
                  <h3 style={{ color: "#9642de" }}>
                    Look no further than Kiddos Tradez!
                  </h3>
                  <br />
                  <p
                    style={{
                      fontFamily: "sans-serif ",
                      lineHeight: 1.5,
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    With Kiddos Tradez, you can easily browse through a vast
                    selection <br />
                    of pre-loved toys, sell or trade your own gently-used items,
                    <br /> and connect with a community of like-minded families
                    who
                    <br />
                    share your passion for play
                    <br />
                    <p
                      style={{
                        fontFamily: "sans-serif ",
                        lineHeight: 1.5,
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      <div style={{ color: "#f46038" }}>So why wait?</div>
                      Sign up for Kiddos Tradez today <br />
                      and discovera whole new world of toy buying, selling,{" "}
                      <br /> and swapping possibilities!
                    </p>
                  </p>
                </motion.div>
              </Grid2>
            </Box>
            <div
              className="photobox"
              style={{
                height: "700px",

                alignContent: "center",
                padding: "90px",
                //backgroundColor: "blue",
              }}
            >
              <Grid2
                item
                xs={11}
                sx={{
                  // backgroundColor: "green",
                  display: "flex",
                  justifyContent: "center",
                  //padding: "10px",
                  height: "450px",
                }}
              >
                <motion.div
                  animate={{ y: "-5vh " }}
                  transition={{ duration: 1.5 }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    className="img"
                    src={toys}
                    style={{
                      position: "relative",
                    }}
                  />
                </motion.div>
              </Grid2>
            </div>
          </div>
        </Box>
      </Box>

      <Box
        style={{
          position: "relative",
        }}
      >
        <motion.div animate={{ y: "-5vh " }} transition={{ duration: 1.5 }}>
          <Box
            style={{
              position: "relative",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "50px",
              backgroundColor: "white",
              width: "70%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              FfexDirection: "row",
              zIndex: "2",
            }}
          >
            {<Content list={list} />}
          </Box>
        </motion.div>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
