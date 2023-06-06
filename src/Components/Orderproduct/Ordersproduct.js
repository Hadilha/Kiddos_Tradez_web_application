import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../Components/Titleadmin/Title";
import { Avatar, TableContainer } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import axios from "axios";
import { Add } from "@mui/icons-material";
import { getAllAnnonces, archiveAnnonce } from "../../services/AdminService";
import ArchiveIcon from "@mui/icons-material/Archive";

function Ordersproduct({ handleListItemClick }) {
  const [list, setlist] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAllAnnonces()
      .then((data) => {
        if (data) {
          const newList = data;
          setlist(newList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  console.log("list type:", typeof list);

  const rows = list.map((list) => ({
    id_annonce: list.id_annonce,
    photo:
      list.estArchive === true ? (
        <>
          <div
            style={{
              position: "relative",
              height: "60px",
              width: "60px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={`http://localhost:2023/images/annonces/${list.picturePath}`}
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
          alt="Remy Sharp"
          src={`http://localhost:2023/images/annonces/${list.picturePath}`}
          style={{ height: "60px", width: "60px" }}
        />
      ),

    state: list.name,
    type: list.type,
    price: list.price,
    category: list.category,
    description: list.description,
    archive: (
      <IconButton
        sx={{ color: "red" }}
        aria-label="Archive"
        onClick={() => handlearchive(list.id_annonce)}
      >
        <ArchiveIcon />
      </IconButton>
    ),
  }));

  const handlearchive = (id_annonce) => {
    archiveAnnonce(id_annonce)
      .then((data) => {
        if (data) {
          setCount(count + 1);

          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Title>Products</Title>
      </div>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right" style={{ textAlign: "right" }}>
                Archive
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id_annonce}>
                <TableCell>{row.photo}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right" style={{ textAlign: "right" }}>
                  {row.archive}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
export default Ordersproduct;
