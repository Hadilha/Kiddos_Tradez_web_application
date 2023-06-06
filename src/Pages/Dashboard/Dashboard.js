import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  mainListItems,
  secondaryListItems,
} from "../../Components/ListItems/listItems";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Ordersproduct from "../../Components/Orderproduct/Ordersproduct";
import Ordersuser from "../../Components/Orderuser/Ordersuser";
import { useState } from "react";
import { Avatar } from "@mui/material";
import logo from "../../Asserts/Logos/kiddostardez.png";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { makeStyles } from "@material-ui/core/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { Getallusers } from "../../services/AdminService";
import { useEffect } from "react";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));
const mdTheme = createTheme();

function DashboardContent() {
  const navigate = useNavigate();
  const onMoveProfile = () => {
    navigate("/profile", { replace: true });
  };
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
    console.log("open", open);
  };
  const classes = useStyles();

  const [selectedListItem, setSelectedListItem] = useState("products");
  const handleListItemClick = (event, listItem) => {
    setSelectedListItem(listItem);
  };

  let selectedContent;

  switch (selectedListItem) {
    case "Products":
      selectedContent = <Ordersproduct />;

      break;
    case "Users":
      selectedContent = (
        <Ordersuser handleListItemClick={handleListItemClick} />
      );

      break;

    default:
      selectedContent = <Ordersproduct />;
      break;
  }

  console.log(selectedContent);
  const [list, setlist] = useState([]);

  useEffect(() => {
    Getallusers()
      .then((data) => {
        if (data) {
          const newList = data;
          setlist(newList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("im in the dashboard", list);
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "#2D033B",
            }}
          >
            <IconButton
              edge="start"
              color="white"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              noWrap
              sx={{ flexGrow: 1, color: "#E6E6FA" }}
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#2D033B",
            },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: [1],
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "40px",
                width: "50px",
                margin: "10px",
                display: !open ? "none" : "flex",
              }}
            />
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon sx={{ color: "white" }} />
            </IconButton>
          </Toolbar>
          {/* <Divider sx={{ backgroundColor: "#E6E6FA" }} />*/}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <div
              style={{
                // backgroundColor: "yellow",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {list.map((item) =>
                item.username === "Admin" ? (
                  <React.Fragment key={item.id}>
                    <Avatar
                      src={`http://localhost:2023/images/profiles/${item.profilePicture}`}
                      style={{
                        height: "120px",
                        width: "130px",
                        margin: "10px",
                        display: open ? "flex" : "none",
                      }}
                    />
                    <h2
                      style={{
                        color: "white",
                        display: open ? "flex" : "none",
                      }}
                    >
                      {item.username}
                    </h2>
                    <p
                      style={{
                        color: "white",
                        display: open ? "flex" : "none",
                      }}
                    >
                      {item.email}
                    </p>
                  </React.Fragment>
                ) : null
              )}
            </div>

            <br />
            <p
              style={{
                fontFamily: "system-ui",
                color: "#E6E6FA",
                fontSize: "20px",
                display: !open ? "none" : "flex",
              }}
            >
              {localStorage.getItem("firstname")}
              {localStorage.getItem("lastname") &&
              localStorage.getItem("firstname")
                ? " "
                : ""}
              {localStorage.getItem("lastname")}
            </p>
            <br />

            <p
              style={{
                fontFamily: "system-ui",
                color: "#E6E6FA",
                fontSize: "10px",
                display: !open ? "none" : "flex",
              }}
            >
              {localStorage.getItem("email")}
            </p>
          </div>
          <Divider
            sx={{
              my: 1,
              backgroundColor: "#E6E6FA",
              display: !open ? "none" : "flex",
            }}
          />
          <List
            component="nav"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <ListItemButton
              onClick={(event) => handleListItemClick(event, "Users")}
              sx={{ height: "50px" }}
            >
              <ListItemIcon>
                <PeopleOutlineOutlinedIcon sx={{ color: "#E6E6FA" }} />
              </ListItemIcon>
              <ListItemText
                primary="Users"
                sx={{
                  display: !open ? "none" : "flex",

                  fontFamily: "system-ui",
                  color: "#E6E6FA",
                  fontSize: "15px",
                }}
              />
            </ListItemButton>

            <ListItemButton
              onClick={(event) => handleListItemClick(event, "Products")}
              sx={{ height: "50px" }}
            >
              <ListItemIcon>
                <CategoryOutlinedIcon sx={{ color: "#E6E6FA" }} />
              </ListItemIcon>
              <ListItemText
                primary="Products"
                sx={{
                  display: !open ? "none" : "flex",

                  fontFamily: "system-ui",
                  color: "#E6E6FA",
                  fontSize: "15px",
                }}
              />
            </ListItemButton>
            <ListItemButton onClick={onMoveProfile} sx={{ height: "50px" }}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: "#E6E6FA" }} />
              </ListItemIcon>
              <ListItemText
                primary="Move to Profile"
                sx={{
                  display: !open ? "none" : "flex",

                  fontFamily: "system-ui",
                  color: "#E6E6FA",
                  fontSize: "15px",
                }}
              />
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Divider
            sx={{
              my: 1,
              backgroundColor: "#E6E6FA",
              display: !open ? "none" : "flex",
            }}
          />

          <Box
            component="main"
            sx={{
              backgroundColor: "#E6E6FA",
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    {selectedContent}
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default function Dashboard() {
  return <DashboardContent />;
}
