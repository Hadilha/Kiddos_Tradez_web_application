import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../Components/Titleadmin/Title";
import { Avatar, TableContainer } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Getallusers, blockUser } from "../../services/AdminService";
import BlockIcon from "@mui/icons-material/Block";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IconButton, Menu, MenuItem } from "@mui/material";

export default function OrderUser({ handleListItemClick }) {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    Getallusers()
      .then((data) => {
        if (data) {
          const newList = data;
          setList(newList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  const handleBlock = (iduser, option) => {
    blockUser(iduser, option)
      .then((data) => {
        if (data) {
          setCount(count + 1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setMenuAnchorEl(null);
  };

  const rows = list.map((row) => ({
    id_user: row.id_user,
    photo:
      row.estArchive === true ? (
        <>
          <div
            style={{
              position: "relative",
              height: "60px",
              width: "60px",
            }}
          >
            <Avatar
              src={`http://localhost:2023/images/profiles/${row.profilePicture}`}
              style={{
                height: "100%",
                width: "100%",
                filter: "grayscale(100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(0.14turn)",
                color: "red",
                padding: "5px",
                fontSize: "12px",
                fontWeight: "bold",
                zIndex: 1,
              }}
            >
              Archive
            </div>
          </div>
        </>
      ) : (
        <Avatar
          src={`http://localhost:2023/images/profiles/${row.profilePicture}`}
          style={{ height: "60px", width: "60px" }}
        />
      ),
    firstname: row.firstname,
    lastname: row.lastname,
    username: row.username,
    email: row.email,
    phone: row.phone,
    home: row.homeAddress,
    description: row.description,
    block: (
      <>
        <IconButton
          sx={{ color: "red" }}
          aria-label="block"
          onClick={handleMenuOpen}
        >
          <BlockIcon />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            sx={{ color: "#2D033B" }}
            onClick={() => handleBlock(row.id_user, "Violation of Terms")}
          >
            Violation of Terms
          </MenuItem>
          <MenuItem
            sx={{ color: "#2D033B" }}
            onClick={() => handleBlock(row.id_user, "Inappropriate Behavior")}
          >
            Inappropriate Behavior
          </MenuItem>
          <MenuItem
            sx={{ color: "#2D033B" }}
            onClick={() => handleBlock(row.id_user, "Security Concerns")}
          >
            Security Concerns
          </MenuItem>
          <MenuItem
            sx={{ color: "#2D033B" }}
            onClick={() => handleBlock(row.id_user, "Non-Compliance")}
          >
            Non-Compliance
          </MenuItem>
        </Menu>
      </>
    ),
  }));

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Title>Users</Title>
      </div>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Home Address</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right" style={{ textAlign: "right" }}>
                Block
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              if (row.username === "Admin") {
                return null;
              }
              return (
                <TableRow key={row.id_annonce}>
                  <TableCell>{row.photo}</TableCell>
                  <TableCell>{row.firstname}</TableCell>
                  <TableCell>{row.lastname}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.home}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell align="right" style={{ textAlign: "right" }}>
                    {row.block}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
