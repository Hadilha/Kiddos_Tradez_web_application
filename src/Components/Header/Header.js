import React, { useRef } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/Action";
import { useMediaQuery } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2), // Add margin bottom to create space between search and navbar
}));

const SearchInputContainer = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "50px",
  width: "60vh",
  height: "40px",
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  color: "gray",
}));

const NavbarContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const HeaderContainer = styled(AppBar)(({ theme }) => ({
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, 0)",
  boxShadow: "none",
}));

function Header(props) {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const { onDrawerToggle } = props;

  return (
    <HeaderContainer>
      <Toolbar>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={8}>
            <SearchContainer>
              <SearchInputContainer>
                <SearchIcon sx={{ color: "gray" }} />
                <SearchInput
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  autoComplete={true}
                  value={search}
                  onInput={(e) => dispatch(setSearch(e.target.value))}
                />
              </SearchInputContainer>
            </SearchContainer>
          </Grid>

          <Grid item xs={12}>
            <NavbarContainer>
              <Navbar />
            </NavbarContainer>
          </Grid>
        </Grid>
      </Toolbar>
    </HeaderContainer>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
