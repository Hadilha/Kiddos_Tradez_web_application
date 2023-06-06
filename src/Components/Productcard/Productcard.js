import "./Productcard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Productcard = ({ item, conncted }) => {
  const [spacing, setSpacing] = React.useState(2);

  const jsx = `
  <Grid container spacing={${spacing}}>
  `;
  const soldout = useSelector((state) => state.soldout);
  const idannonce = useSelector((state) => state.idannonce);

  console.log("soldout", soldout);
  console.log("idannonce", idannonce);

  return (
    <motion.div layout>
      <Link
        to={`/product?id=${item.id_annonce}&conncted=${conncted}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          sx={{
            width: "200px",
            height: "280px",
            boxShadow: "0 5px 5px rgba(31, 28, 135, 0.37)",
            transition: "all 1s ease-out",
            borderRadius: "10px",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#6104b794",
              borderRadius: "30px",
              cursor: "pointer",
            },
          }}
        >
          <CardActionArea>
            {soldout && idannonce === `${item.id_annonce}` ? (
              <>
                <CardMedia
                  component="img"
                  height="170px"
                  width="100px"
                  src={`http://localhost:2023/images/annonces/${item.picturePath}`}
                  alt="green iguana"
                  style={{ filter: "grayscale(100%)" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "10%",
                    transform: "rotate(0.12turn)",
                    color: "red",
                    padding: "10px",
                    fontSize: "30px",
                    fontWeight: "bold",
                    zIndex: 1,
                  }}
                >
                  SOLD OUT
                </div>
              </>
            ) : (
              <CardMedia
                component="img"
                height="170px"
                width="100px"
                src={`http://localhost:2023/images/annonces/${item.picturePath}`}
                alt={item.name}
              />
            )}

            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ color: "#810CA8" }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  maxHeight: "60px", // Adjust the height as needed
                  overflow: "hidden",
                  lineHeight: "20px",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.description}
              </Typography>

              <Typography
                className="price"
                style={{ color: "#2D033B", fontWeight: "bold" }}
              >
                {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </motion.div>
  );
};

export default Productcard;
