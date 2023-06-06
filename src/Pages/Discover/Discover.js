import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar.js";
import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navigator from "../../Components/Navigator/Navigator";
import Content from "../../Components/Content/Content";
import Crousell from "../../Components/Crousell/Crousell";
import "./Discover.css";
import Navbardiscover from "../../Components/Navbardiscover/Navbardiscover";
import axios from "axios";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  getAnnonceByCategory,
  getAllAnnonces,
} from "../../services/AnnonceService";

let theme = createTheme({
  mixins: {
    toolbar: {
      minHeight: 80,
    },
  },
});

const drawerWidth = 256;

/*--------------------------------------------------------*/
function Discover() {
  const [list, setList] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);

  /*--------------------------------------------------------*/

  const [ages, setages] = useState([
    { id: 1, checked: false, label: "0-2" },
    { id: 2, checked: false, label: "2-4" },
    { id: 3, checked: false, label: "4-6" },
    { id: 4, checked: false, label: "+6" },
  ]);

  const [prices, setprices] = useState([
    { id: 1, checked: false, label: "0-5" },
    { id: 2, checked: false, label: "5-10" },
    { id: 3, checked: false, label: "10-15" },
    { id: 4, checked: false, label: "+15" },
  ]);

  /****************************************************/

  /****************************************************/
  const handleChangeChecked = (id) => {
    const agesStateList = ages;
    const changeCheckedages = agesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setages(changeCheckedages);
  };
  const handleChangePrice = (id) => {
    const pricesStateList = prices;
    const changeCheckedprices = pricesStateList.map((itemm) =>
      itemm.id === id ? { ...itemm, checked: !itemm.checked } : itemm
    );
    setprices(changeCheckedprices);
  };

  /****************************************************/

  const agesChecked = ages
    .filter((item) => item.checked)
    .map((item) => {
      console.log("item.label", item.label);
      return item.label;
    });

  const pricesChecked = prices
    .filter((itemm) => itemm.checked)
    .map((itemm) => {
      if (itemm.label !== "+15") {
        const [minPrice, maxPrice] = itemm.label.split("-");
        return {
          id: itemm.id,
          minPrice: parseInt(minPrice.trim()),
          maxPrice: parseInt(maxPrice.trim()),
        };
      } else if (itemm.label == "+15") {
        const minPrice = parseInt(itemm.label.replace("+", "").trim());
        const maxPrice = 999;
        return {
          minPrice: minPrice,
          maxPrice: maxPrice,
        };
      }
    });

  /****************************************************/
  const applyFilters = (list) => {
    let updatedList = list;

    if (agesChecked.length) {
      updatedList = updatedList.filter((item) => {
        const itemAge = item.ageChild;
        const ageInRange = agesChecked.some((age) => {
          if (age === itemAge) {
            return true;
          }
          return false;
        });
        return ageInRange;
      });
    }

    if (pricesChecked.length) {
      updatedList = updatedList.filter((item) => {
        const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
        const priceInRange = pricesChecked.some(
          (price) =>
            numericPrice >= price.minPrice && numericPrice <= price.maxPrice
        );
        return priceInRange;
      });
    }
    if (search) {
      console.log("search", search);
      const searchLowercase = search.toLowerCase();
      updatedList = updatedList.filter((item) => {
        const itemNameLowercase = item.name.toLowerCase();
        const itemDescriptionLowercase = item.description.toLowerCase();
        return (
          itemNameLowercase.includes(searchLowercase) ||
          itemDescriptionLowercase.includes(searchLowercase)
        );
      });
    }

    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  /****************************************************/
  const categoryy = useSelector((state) => state.category);
  const search = useSelector((state) => state.search);

  console.log("categoryy", categoryy);
  console.log("search", search);
  useEffect(() => {
    if (categoryy) {
      getAnnonceByCategory(categoryy)
        .then((data) => {
          console.log("data", data);
          const newList = data;
          setList(newList);
          applyFilters(newList);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getAllAnnonces()
        .then((data) => {
          console.log("data", data);
          const newList = data;
          setList(newList);
          applyFilters(newList);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ages, prices, categoryy, search]);

  /********************************************************************/
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    console.log(mobileOpen);
    setMobileOpen(!mobileOpen);
    console.log(mobileOpen);
  };
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "row",
        backgroundColor: "red",
      }}
    >
      <Navbardiscover />
      <div
        style={{
          //backgroundColor: "#E8E8E8",
          display: "flex",
          justifyItems: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            display: "inline-block",
            position: "sticky",
            top: 0,
            height: "100%",
          }}
        >
          <Navigator
            variant="temporary"
            ages={ages}
            changeChecked={handleChangeChecked}
            prices={prices}
            changePrice={handleChangePrice}
          />
        </div>

        <div
          style={{
            // backgroundColor: "green",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            //alignItems: "center",
            // height: "500px",
          }}
        >
          <div
            style={{
              //  backgroundColor: "orange",
              display: "inline-block",
            }}
          >
            <motion.div
              style={{
                marginTop: "40px",
                overflow: "auto",
                display: "flex",
                minHeight: "80vh",
                backgroundColor: "white",
                borderRadius: "0px",
              }}
            >
              {<Content list={list} />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Discover;
