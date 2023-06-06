import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import img from "../../Asserts/Logos/building.png";
import edu from "../../Asserts/Logos/education.png";
import imm from "../../Asserts/Logos/imagination.png";
import art from "../../Asserts/Logos/art.png";
import house from "../../Asserts/Logos/house.png";
import Dropdowneducational from "../Dropdowneducational/Dropdowneducational";
import Dropdownimm from "../Dropdownimm/Dropdownimm";
import Dropdownart from "../Dropdownart/Dropdownart";
import Dropdownhouse from "../Dropdownhouse/Dropdownhouse";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdowned, setDropdowned] = useState(false);
  const [dropdownimm, setDropdownimm] = useState(false);
  const [dropdownart, setDropdownart] = useState(false);
  const [dropdownhouse, setDropdownhouse] = useState(false);

  const navItems = [
    {
      id: 1,
      title: "Building",
      path: "./",
      cName: "nav-item",
      image: img,
    },
    {
      id: 2,
      title: "Educational",
      path: "./services",
      cName: "nav-item",
      image: edu,
    },
    {
      id: 3,
      title: "Imagination",
      path: "./products",
      cName: "nav-item",
      image: imm,
    },
    {
      id: 4,
      title: "Arts and Crafts",
      path: "./contactus",
      cName: "nav-item",
      image: art,
    },
    {
      id: 5,
      title: "Active Play",
      path: "./contactus",
      cName: "nav-item",
      image: house,
    },
  ];

  const isMobile = useMediaQuery("(max-width: 960px)");

  const handleMouseEnter = (index) => {
    switch (index) {
      case 0:
        setDropdown(true);
        break;
      case 1:
        setDropdowned(true);
        break;
      case 2:
        setDropdownimm(true);
        break;
      case 3:
        setDropdownart(true);
        break;
      case 4:
        setDropdownhouse(true);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = (index) => {
    switch (index) {
      case 0:
        setDropdown(false);
        break;
      case 1:
        setDropdowned(false);
        break;
      case 2:
        setDropdownimm(false);
        break;
      case 3:
        setDropdownart(false);
        break;
      case 4:
        setDropdownhouse(false);
        break;
      default:
        break;
    }
  };

  const renderNavItems = () => {
    if (isMobile) {
      // Render mobile navigation items
      return (
        <>
          {navItems.map((item) => (
            <li key={item.id} className={item.cName}>
              <img src={item.image} style={{ height: "60px", width: "70px" }} />
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </>
      );
    } else {
      // Render desktop navigation items with dropdowns
      return (
        <>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={item.cName}
            >
              <img
                src={item.image}
                style={{ display: "flex", height: "60px", width: "70px" }}
              />
              <Link to={item.path}>{item.title}</Link>
              {renderDropdown(index)}
            </li>
          ))}
        </>
      );
    }
  };

  const renderDropdown = (index) => {
    switch (index) {
      case 0:
        return dropdown && <Dropdown />;
      case 1:
        return dropdowned && <Dropdowneducational />;
      case 2:
        return dropdownimm && <Dropdownimm />;
      case 3:
        return dropdownart && <Dropdownart />;
      case 4:
        return dropdownhouse && <Dropdownhouse />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-items">{renderNavItems()}</ul>
      </nav>
    </>
  );
}

export default Navbar;
