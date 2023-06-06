import React from "react";
import "./Navprofile.css";
import { useState } from "react";
import logo from "../../Asserts/Logos/kiddostardez.png";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { Button, SvgIcon } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/system";
import Addproduct from "../../Pages/Addproduct/Addproduct";
import Favorite from "../Favorite/Favorite";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useDispatch } from "react-redux";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { setAdmin } from "../../redux/Action";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";

const NavProfile = () => {
  const dispatch = useDispatch();
  const [isExpanded, setExpendState] = useState(false);
  const handlelogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("lastname");
    localStorage.removeItem("password");
    localStorage.removeItem("avgResponseTime");
    localStorage.removeItem("firstname");
    localStorage.removeItem("description");
    localStorage.removeItem("homeAddress");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    dispatch(setAdmin(false));

    window.location.reload();
    window.location.href = "/";
  };
  const [open, setOpen] = React.useState(false);

  const handleaddproduct = () => {
    console.log("im here ");
    setOpen(true);
  };

  function handleStateChange(newState) {
    setOpen(false);
    console.log("newState-----------", newState);
    console.log("newStateopen-----------", open);
  }

  const [isExpandedfavorite, setIsExpandedfavorite] = useState(false);

  const [isExpandednotification, setIsExpandednotification] = useState(false);

  const [state, setState] = useState({
    left: false,
  });
  const [statenotif, setStatenotif] = useState({
    left: false,
  });
  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };
  const toggleDrawernotification = (side, open) => () => {
    setStatenotif({ ...state, [side]: open });
  };
  const openFavoriteDrawer = () => {
    toggleDrawer("left", true)();
  };
  const openNotificationDrawer = () => {
    toggleDrawernotification("left", true)();
  };
  const navigate = useNavigate();
  const handleClickDashboard = () => {
    navigate("/dashboard", { replace: true });
  };
  const admin = useSelector((state) => state.admin);

  const updatenotif = useSelector((state) => state.updatenotifbolean);

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "70px",
                  width: "110px",
                  margin: "15px",
                }}
              />
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => {
              setExpendState(!isExpanded);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {admin && (
            <Button
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              onClick={handleClickDashboard}
              sx={{
                color: "white",
                display: "grid",
                textDecorationLine: "none",
                color: "var(--light)",
                width: isExpanded ? "250px" : "0px",
                display: "flex",
                textTransform: "uppercase",
                borderRadius: "10px",
                margin: "10px",

                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <SvgIcon
                  component={DashboardIcon}
                  sx={{
                    marginRight: "10px",
                  }}
                  inheritViewBox
                />

                {isExpanded && (
                  <p style={{ margin: "0px", color: "white" }}>Dashboard</p>
                )}
              </Box>
            </Button>
          )}

          <Button
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            onClick={handleaddproduct}
            sx={{
              color: "white",
              display: "grid",
              textDecorationLine: "none",
              color: "var(--light)",
              width: isExpanded ? "250px" : "0px",
              display: "flex",
              textTransform: "uppercase",
              borderRadius: "10px",
              margin: "10px",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <SvgIcon
                component={LibraryAddOutlinedIcon}
                sx={{
                  marginRight: "10px",
                }}
                inheritViewBox
              />

              {isExpanded && (
                <p
                  style={{
                    margin: "0px",
                    color: "white",
                  }}
                >
                  Add Product
                </p>
              )}
            </Box>
          </Button>

          <Button
            sx={{
              color: "white",
              display: "grid",
              textDecorationLine: "none",
              color: "var(--light)",
              width: isExpanded ? "250px" : "0px",
              display: "flex",
              textTransform: "uppercase",
              borderRadius: "10px",
              margin: "10px",
              justifyContent: "flex-start",
            }}
            //className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
            onClick={openFavoriteDrawer}
            className={
              isExpandedfavorite ? "menu-item" : "menu-item menu-item-NX"
            }
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <SvgIcon
                component={FavoriteBorderIcon}
                inheritViewBox
                sx={{ marginRight: "10px" }}
              />

              {isExpanded && (
                <p style={{ margin: "0px", color: "white" }}>Favoris</p>
              )}
            </Box>
          </Button>
          <Button
            sx={{
              color: "white",
              display: "grid",
              textDecorationLine: "none",
              color: "var(--light)",
              width: isExpanded ? "250px" : "0px",
              display: "flex",
              textTransform: "uppercase",
              borderRadius: "10px",
              margin: "10px",
              justifyContent: "flex-start",
            }}
            onClick={openNotificationDrawer}
            className={
              isExpandednotification ? "menu-item" : "menu-item menu-item-NX"
            }
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {updatenotif && (
                  <span
                    style={{
                      position: "absolute",
                      // top: "0px",
                      //right: "10px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      width: "12px",
                      height: "12px",
                    }}
                  />
                )}
                <SvgIcon
                  component={NotificationsNoneIcon}
                  inheritViewBox
                  sx={{ marginRight: "10px" }}
                />
              </div>
              {isExpanded && (
                <p style={{ margin: "0px", color: "white" }}>Notification</p>
              )}
            </Box>
          </Button>

          <Button
            className="menu-item"
            onClick={handlelogout}
            sx={{
              color: "white",
              display: "grid",
              textDecorationLine: "none",
              color: "var(--light)",
              width: isExpanded ? "250px" : "0px",
              display: "flex",
              textTransform: "uppercase",
              borderRadius: "10px",
              margin: "10px",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <SvgIcon
                component={LogoutIcon}
                inheritViewBox
                sx={{
                  marginRight: "10px",
                }}
              />
              {isExpanded && (
                <p
                  style={{
                    margin: "0px",
                    color: "white",
                  }}
                >
                  Log Out
                </p>
              )}
            </Box>
          </Button>
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
              srcset=""
            />
          </div>
        )}
        <img
          className="logout-icon"
          src="icons/logout.svg"
          alt=""
          srcset=""
          style={{ zIndex: 2 }}
        />
      </div>
      <Addproduct openn={open} onStateChange={handleStateChange} />
      <Favorite toggleDrawer={toggleDrawer} state={state} />
      <Notification
        toggleDrawernotification={toggleDrawernotification}
        statenotif={statenotif}
      />
    </div>
  );
};

export default NavProfile;
