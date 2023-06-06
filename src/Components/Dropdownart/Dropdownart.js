import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { setCategory } from "../../redux/Action";
import { useDispatch } from "react-redux";

import "./Dropdownart.css";

function Dropdownart() {
  const serviceDropdownart = [
    {
      id: 1,
      title: "Drawing Sets",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Painting Kits",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Bead Jewelry Kits",
      cName: "submenu-item",
    },
    {
      id: 4,
      title: "Clay and Dough Sets",
      cName: "submenu-item",
    },
    {
      id: 5,
      title: "Sewing Machines",
      cName: "submenu-item",
    },
  ];

  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();

  const List = serviceDropdownart.map((item) => {
    const handleClick = () => {
      dispatch(setCategory(item.title));
      console.log("sett");

      setDropdown(false);
    };
    return (
      <li key={item.id}>
        <Button
          className={item.cName}
          //variant=""
          style={{ color: "white", backgroundColor: "#2D033B" }}
          onClick={handleClick}
        >
          {item.title}
        </Button>
      </li>
    );
  });

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {List}
      </ul>
    </>
  );
}

export default Dropdownart;
