import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/Action";
import { useSelector } from "react-redux";

function Dropdown() {
  const serviceDropdown = [
    {
      id: 1,
      title: "Blocks",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Magnetic Tiles",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Marble Runs",
      cName: "submenu-item",
    },
    {
      id: 4,
      title: "Construction Sets",
      cName: "submenu-item",
    },
    {
      id: 5,
      title: "Gear Sets",

      cName: "submenu-item",
    },
    {
      id: 6,
      title: "Connectors",

      cName: "submenu-item",
    },
  ];

  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();

  const List = serviceDropdown.map((item) => {
    const handleClick = () => {
      dispatch(setCategory(item.title));
      console.log("sett");

      setDropdown(false);
    };

    return (
      <li key={item.id}>
        <Button
          className={item.cName}
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

export default Dropdown;
