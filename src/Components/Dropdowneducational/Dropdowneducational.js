import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdowneducational.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/Action";
function Dropdowneducational() {
  const serviceDropdowned = [
    {
      id: 1,
      title: "Science Kits",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Math Games",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Language Learning Toys",
      cName: "submenu-item",
    },
    {
      id: 4,
      title: "Geography Puzzles",
      cName: "submenu-item",
    },
    {
      id: 5,
      title: "Coding Games",
      cName: "submenu-item",
    },
  ];

  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();

  const List = serviceDropdowned.map((item) => {
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

export default Dropdowneducational;
