import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Content from "../../Components/Content/Content";
import { useEffect, useState } from "react";
import {
  annonceForSale,
  annonceForExchange,
} from "../../services/AnnonceService";
function Tabpanellnonconnecterr(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            width: "100%",
            height: "500px",
            // backgroundColor: "red",
            borderRadius: "50px",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Tabpanellnonconnecterr.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Tabpanellnonconnecter(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  useEffect(() => {
    annonceForSale(props.id)
      .then((data) => {
        const newList = data;
        setList(newList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id]);
  useEffect(() => {
    annonceForExchange(props.id)
      .then((data) => {
        const newList = data;
        setList2(newList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id]);
  console.log("list2", list);
  return (
    <Box sx={{}}>
      <AppBar position="static" style={{ backgroundColor: "#ffffff00" }}>
        <Tabs
          sx={{ color: "#2D033B" }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="EXCHANGE" {...a11yProps(0)} />
          <Tab label="SALE" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <Tabpanellnonconnecterr
          sx={{ color: "red" }}
          value={value}
          index={0}
          dir={theme.direction}
        >
          {<Content list={list} />}
        </Tabpanellnonconnecterr>
        <Tabpanellnonconnecterr
          sx={{ color: "black " }}
          value={value}
          index={1}
          dir={theme.direction}
        >
          {<Content list={list2} />}
        </Tabpanellnonconnecterr>
      </SwipeableViews>
    </Box>
  );
}
