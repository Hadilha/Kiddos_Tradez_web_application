import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import Favoritelist from "../Favoritelist/Favoritelist";
import { getAllFavorite } from "../../services/FavoriteService";

const Favorite = ({ toggleDrawer, state }) => {
  const [listfavorie, setListfavorie] = useState([]);

  const handleDrawerClose = () => {
    toggleDrawer("left", false)();
  };
  const id = localStorage.getItem("id");
  const [countfavorie, setcountfavorie] = useState(0);

  useEffect(() => {
    getAllFavorite(id)
      .then((data) => {
        const newList = data;
        setListfavorie(newList);
        console.log("newList", newList);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("countfavorie", countfavorie);
  }, [countfavorie]);

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
            {listfavorie?.map((item) => {
              return (
                <Favoritelist
                  item={item}
                  key={item.favorite_id}
                  setcountfavorie={setcountfavorie}
                  countfavorie={countfavorie}
                />
              );
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
        open={state.left}
        onClose={handleDrawerClose}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default Favorite;
