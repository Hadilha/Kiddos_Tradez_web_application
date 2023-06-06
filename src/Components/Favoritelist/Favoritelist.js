import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import {
  addToFavorie,
  removeFromFavorie,
} from "../../services/FavoriteService";
import { Favorite } from "@mui/icons-material";
import { setIsAFavorie } from "../../redux/Action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Favoritelist = ({ item, setcountfavorie, countfavorie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  console.log("item", item);
  const dispatch = useDispatch();

  const handleClickremovefavorie = (id) => {
    console.log("id", id);

    removeFromFavorie(id)
      .then((data) => {
        console.log(data);
        setcountfavorie(countfavorie + 1);
        dispatch(setIsAFavorie(false));
        // Update the count after the removal
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ListItem key={item.favorite_id} disablePadding>
      <Link
        to={`/product?id=${item.annonce.id_annonce}&conncted=true`}
        style={{ textDecoration: "none" }}
      >
        <ListItem>
          <ListItemIcon>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Avatar
                alt="Remy Sharp"
                src={`http://localhost:2023/images/annonces/${item.annonce.picturePath}`}
                sx={{ height: "65px", width: "65px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "35px",
                  right: "-5px",
                  background: "red",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                <Favorite sx={{ height: "18px", width: "18px" }} />
              </div>
            </div>
          </ListItemIcon>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "100px",
              marginTop: "10px",
              marginLeft: "10px",
            }}
          >
            <p style={{ fontWeight: "bold", margin: "0px" }}>
              {item.annonce.name}
            </p>
            <p>{item.annonce.price}</p>
          </div>
          <IconButton
            variant="contained"
            color="error"
            onClick={() => handleClickremovefavorie(item.annonce.id_annonce)}
            title="remove from favorite"
            sx={{ paddingBottom: "8px", marginLeft: "40px" }}
          >
            <FavoriteIcon fontSize="medium  " color="secondary" />
          </IconButton>
        </ListItem>
      </Link>
    </ListItem>
  );
};
export default Favoritelist;
