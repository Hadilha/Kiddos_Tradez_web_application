import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdownimm.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/Action";
function Dropdownimm() {
  const serviceDropdownimm = [
    {
      id: 1,
      title: "Dollhouses",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Play Kitchen Sets",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Workbenches",
      cName: "submenu-item",
    },
    {
      id: 4,
      title: "Doctor Kits",
      cName: "submenu-item",
    },
    {
      id: 5,
      title: "Play Tools",
      cName: "submenu-item",
    },
    {
      id: 6,
      title: "Teddy bears",
      cName: "submenu-item",
    },
    {
      id: 7,
      title: "Other furry creatures",
      cName: "submenu-item",
    },
  ];

  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();

  const List = serviceDropdownimm.map((item) => {
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

export default Dropdownimm;
