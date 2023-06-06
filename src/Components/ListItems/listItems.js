import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Person2 from "@mui/icons-material/Person2";
import PeopleIcon from "@mui/icons-material/People";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Person2 />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CategorySharpIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
  </React.Fragment>
);
