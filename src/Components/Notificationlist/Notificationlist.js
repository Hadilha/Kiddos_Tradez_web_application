import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { GetUser } from "../../services/UserService";
import AverageTimeCalculator from "../AverageTimeCalculator/AverageTimeCalculator";
import { Link } from "react-router-dom";
const Notificationlist = ({ item }) => {
  console.log("item.id", item.id);
  const id = parseInt(localStorage.getItem("id"), 10);
  console.log("id", id);
  if (item.commentUserId === id) {
    console.log("im in the null");
    return null;
  } else {
    return (
      <Link
        to={`/product?id=${item.annonceId}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <ListItem key={item.id} disablePadding>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemIcon sx={{ margin: "8px" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={`http://localhost:2023/images/profiles/${item.commentUserProfilePicture}`}
                  sx={{ height: "65px", width: "65px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "35px",
                    right: "-5px",
                    background: "#00ff00",
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
                  <ChatBubbleRoundedIcon
                    sx={{ height: "18px", width: "18px" }}
                  />
                </div>
              </div>
            </ListItemIcon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "190px",
                padding: "10px",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "100px",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              <div>
                <div style={{ fontWeight: "bold", margin: "0px" }}>
                  {item.commentUsername}
                </div>
                commented on your post
                <p style={{ color: "gray", fontSize: "13px" }}>
                  <AverageTimeCalculator date={item.createdAt} />
                </p>
              </div>
            </div>
          </div>
        </ListItem>
      </Link>
    );
  }
};
export default Notificationlist;
