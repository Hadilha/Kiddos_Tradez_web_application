import React, { useEffect } from "react";
import Navbarprofile from "../../Components/Navbarprofile/Navbarprofile";

import Typography from "@mui/material/Typography";
import Tabpanell from "../../Components/Tabpanel/Tabpanell";
import { useLocation } from "react-router-dom";
import qs from "qs";
import { useState } from "react";
import Tabpanellnonconnecter from "../../Components/Tabpanellnonconnecter/Tabpanellnonconnecter";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Box, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import { setRating, gettRating } from "../../services/RatingService";
import { GetUser } from "../../services/UserService";
import { useDispatch } from "react-redux";

const Profilenonconnected = () => {
  const location = useLocation();
  const [User, setUser] = useState("");
  const dispatch = useDispatch();

  const { id } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  useEffect(() => {
    GetUser(id)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const [valuerating, setValuerating] = React.useState();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const currentUser = localStorage.getItem("id");

  useEffect(() => {
    gettRating(id)
      .then((data) => {
        if (data) {
          setValuerating(data);
          setValue(data);
          console.log("data", data);
        } else {
          console.log("im here");
          setValuerating(0);
          setValue(0);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlesetrating = (event, newValue) => {
    setValue(newValue);
    console.log("newValue", newValue);
    setRating(id, newValue)
      .then((data) => {
        console.log("data", data);
        console.log("valuerating1", valuerating);
        gettRating(id)
          .then((data) => {
            if (data) {
              setValuerating(data);
              console.log("data2", data);
            } else {
              setValuerating(0);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyItems: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "65px",
            top: 0,
            right: 0,
            position: "sticky",
            width: "100%",
            zIndex: 2,
          }}
        >
          <Navbarprofile />
        </div>
        <div
          style={{
            zIndex: "0",
            display: "inline-block",
          }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBCard
              style={{ borderRadius: "10px", width: "100%", height: "100%" }}
            >
              <div className="rounded-top text-white d-flex flex-row">
                <div
                  className="ms-4 mt-5 "
                  style={{
                    width: "150px",
                    marginLeft: "20px",

                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "red",
                  }}
                >
                  <MDBCardImage
                    src={`http://localhost:2023/images/profiles/${User.profilePicture}`}
                    alt="Generic placeholder image"
                    className="img-thumbnail"
                    fluid
                    style={{ width: "156px", height: "160px", zIndex: "0" }}
                  />

                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",

                      marginRight: "0px",
                      width: "150px",
                      padding: "0px",
                    }}
                  ></div>
                </div>

                <Grid
                  container
                  spacing={1}
                  //className="ms-3"
                  style={{
                    marginTop: "50px",
                    marginLeft: "50px",
                    //backgroundColor: "red",
                    display: "flex",

                    height: "180px",
                  }}
                >
                  <Grid
                    xs={10}
                    sx={{
                      height: "40px",
                    }}
                  >
                    <MDBTypography
                      tag="div"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "#2D033B",
                        fontSize: "13px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",

                          flexDirection: "row",
                        }}
                      >
                        <h2
                          style={{
                            color: "black",

                            padding: "0px",
                          }}
                        >
                          {User.username}
                        </h2>
                      </div>
                      <Box
                        sx={{
                          width: 200,
                          display: "flex",
                          alignItems: "center",
                          //backgroundColor: "red",
                        }}
                      >
                        {id === currentUser ? (
                          <Rating
                            precision={0.5}
                            name="read-only"
                            value={value}
                            readOnly
                          />
                        ) : (
                          <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={handlesetrating}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                        )}
                      </Box>
                      <div
                        style={{
                          display: "flex",
                          marginTop: "10px",
                          flexDirection: "row",
                        }}
                      >
                        <p
                          style={{
                            color: "gray",
                            fontSize: "10px",
                            width: "240px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {User.description}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "column",
                          marginTop: "15px",
                        }}
                      >
                        <LocationOnIcon
                          sx={{
                            color: "#989898	",
                            fontSize: "15px",
                            marginRight: "5px",
                          }}
                        ></LocationOnIcon>

                        <p
                          style={{
                            color: "#B0B0B0	",
                            fontSize: "10px",
                            margin: "0px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {User.homeAddress}
                        </p>

                        <PhoneIcon
                          sx={{
                            color: "#989898	",
                            fontSize: "15px",
                            marginLeft: "15px",

                            marginRight: "5px",
                          }}
                        ></PhoneIcon>
                        <p
                          style={{
                            color: "#B0B0B0	",
                            fontSize: "10px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {User.phone}
                        </p>
                      </div>

                      <br />
                    </MDBTypography>
                  </Grid>
                </Grid>
              </div>
              <MDBCardBody
                style={{
                  height: "600px",

                  margin: "0px",
                  padding: "0px",
                }}
              >
                <Tabpanellnonconnecter id={id} />
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};
export default Profilenonconnected;
