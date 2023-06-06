import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import Notificationlist from "../Notificationlist/Notificationlist";
import { getAllFavorite } from "../../services/FavoriteService";
import { getNotifications } from "../../services/NotificationService";
import { useDispatch } from "react-redux";
import { setUpdateNotif, setUpdateNotifBolean } from "../../redux/Action";
import { useSelector } from "react-redux";

const Notification = ({ toggleDrawernotification, statenotif }) => {
  const [listnotif, setListnotif] = useState([]);

  const handleDrawerClose = () => {
    toggleDrawernotification("left", false)();
    dispatch(setUpdateNotifBolean(false));
  };
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();
  const updatenotif = useSelector((state) => state.updatenotif);

  useEffect(() => {
    getNotifications(id)
      .then((data) => {
        const newList = data;
        setListnotif(newList);
        const numberOfItems = newList.length;

        if (numberOfItems > updatenotif) {
          dispatch(setUpdateNotif(updatenotif + 1));
          dispatch(setUpdateNotifBolean(true));
        }

        console.log("listnotif", newList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const list = () => {
    return (
      <Box
        sx={{
          width: 350,
          background: "transparent",
        }}
      >
        <List>
          <div>
            {listnotif?.map((item) => {
              return <Notificationlist item={item} key={item.id} />;
            })}
          </div>
        </List>
        <Divider />
      </Box>
    );
  };

  return (
    <React.Fragment key="left">
      <Drawer
        anchor="left"
        BackdropProps={{ invisible: true }}
        PaperProps={{
          style: {
            position: "absolute",
            top: "65px",
            width: "300px",
            left: "85px",
          },
        }}
        open={statenotif.left}
        onClose={handleDrawerClose}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default Notification;
