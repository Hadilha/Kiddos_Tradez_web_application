import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdownhouse.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/Action";
function Dropdownhouse() {
  const serviceDropdownhouse = [
    {
      id: 1,
      title: "Trampolines",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Playhouses",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Slidess",
      cName: "submenu-item",
    },
    {
      id: 4,
      title: "Swings",
      cName: "submenu-item",
    },
    {
      id: 5,
      title: "Bikes",
      cName: "submenu-item",
    },
    {
      id: 6,
      title: "Scooters",
      cName: "submenu-item",
    },
  ];

  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();

  const List = serviceDropdownhouse.map((item) => {
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

export default Dropdownhouse;
