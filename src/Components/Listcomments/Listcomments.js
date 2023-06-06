import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Avatar } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { deleteComment, getComments } from "../../services/CommentService";
import AverageTimeCalculator from "../AverageTimeCalculator/AverageTimeCalculator";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { getallusers } from "../../services/UserService";
import { Link } from "react-router-dom";

const Listcomments = ({ id, count }) => {
  const [list, setList] = useState();
  const [userlist, setUserList] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [countdelete, setcountdelete] = useState(false);
  const idconnected = localStorage.getItem("id");


  
  const handleDeletePost = (id) => {
    deleteComment(id)
      .then((data) => {
        setcountdelete(true);
        console.log("deleted succ");
      })
      .catch((error) => {
        console.log(error);
      });
    setcountdelete(false);
    setAnchorEl(null);
  };

  useEffect(() => {
    getComments(id)
      .then((data) => {
        setList(data);

        console.log("count", count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, count, countdelete]);

  useEffect(() => {
    getallusers()
      .then((data) => {
        setUserList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("userlist", userlist);
  const [showButton, setShowButton] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {list?.map((item) => {
        {
          return (
            <Box
              sx={{
                display: "flex",
                marginTop: "10px",
                width: "1000px",
              }}
            >
              <Link
                to={`/profilenonconnected?id=${item.user.id_user}`}
                style={{ textDecoration: "none" }}
              >
                <Avatar
                  src={`http://localhost:2023/images/profiles/${item.user.profilePicture}`}
                  to={`/profilenonconnected?id=${item.user.id_user}`}
                  sx={{ height: "40px", width: "40px" }}
                />
              </Link>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      marginLeft: "10px",
                      width: "350px",
                      backgroundColor: "#ededfc",
                      borderRadius: "20px",
                      border: "1px solid #E0E3E7",
                      alignItems: "start",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        color: "black",
                        fontSize: "12px",
                        fontWeight: "bold",
                        paddingTop: "10px",
                        paddingLeft: "11px",
                        margin: "0px",
                      }}
                    >
                      {item.username}
                    </p>
                    <p
                      style={{
                        color: "black",
                        fontSize: "12px",
                        marginLeft: "10px",
                        width: "200px",
                        wordWrap: "break-word",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "15px",
                      marginLeft: "15px",
                      // display: "flex",
                    }}
                  >
                    {item.user.id_user.toString() === idconnected ? (
                      <>
                        <IconButton
                          onClick={handleMenuOpen}
                          sx={{
                            backgroundColor: "#ffffff",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                        >
                          <MenuItem
                            style={{
                              fontSize: "15px",
                              padding: "5px",
                              // borderRadius: "10px",
                            }}
                            onClick={() =>
                              handleDeletePost(item.id_comment.toString())
                            }
                          >
                            Delete comment
                          </MenuItem>
                        </Menu>
                      </>
                    ) : null}
                  </div>
                </div>
                <p
                  style={{
                    marginLeft: "20px",
                    fontSize: "13px",
                    color: "grey",
                  }}
                >
                  <AverageTimeCalculator date={item.createdDate} />
                </p>
              </div>
            </Box>
          );
        }
      })}
    </>
  );
};

export default Listcomments;
