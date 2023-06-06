import * as React from "react";
import Box from "@mui/material/Box";
import "./Product.css";
import { Avatar, Chip } from "@mui/material";
import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import qs from "qs";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Modifyproduct from "../../Components/Modifyproduct/Modifyproduct";
import { useSelector } from "react-redux";
import fluid from "../../Asserts/Images/fluid.png";
import { getAnnonce } from "../../services/AnnonceService";
import { getUser } from "../../services/AnnonceService";
import { GetUser } from "../../services/UserService";
import {
  addToFavorie,
  removeFromFavorie,
} from "../../services/FavoriteService";
import Navbarheader from "../../Components/Navbarheader/Navbarheader";
import FormControl from "@mui/material/FormControl";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { saveComment } from "../../services/CommentService";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Button } from "antd";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Comments from "../../Components/Comments/Comments";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { setIsAFavorie } from "../../redux/Action";

const purpl = {
  100: "#F5E1FF",
  200: "#CC99FF",
  400: "#9F40FF",
  500: "#7F00FF",
  600: "#6600CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};
const StyledInputRoot = styled("div")(
  ({ theme }) => `
 
  font-weight: 400;
  border-radius: 20px;
  color: ${theme.palette.mode === "light" ? grey[300] : grey[500]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? purpl[700] : grey[200]};
  
  display: flex;
  align-items: start;
  justify-content: start;


  &.${inputUnstyledClasses.focused} {
    border-color: ${purpl};

  }

  &:hover {
    border-color: ${purpl[400]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const StyledInputElement = styled("textarea")(
  ({ theme }) => `
  font-size: 0.8rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 12px;
  outline: 0;
  width:100%;
  resize:none;
`
);

const InputAdornment = styled("div")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { slots, ...other } = props;
  return (
    <InputUnstyled
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

CustomInput.propTypes = {
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType,
    textarea: PropTypes.elementType,
  }),
};
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
function Product() {
  const dispatch = useDispatch();

  const location = useLocation();
  const [Toy, setToy] = useState("");
  const [User, setUser] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [comment, setComment] = useState("");
  const [user, setuser] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const submitComment = () => {
    saveComment(id, comment)
      .then((data) => {
        console.log(data);
        setComment("");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  function updateComment(value) {
    let commentCopy = comment;
    commentCopy = value;
    setComment(commentCopy);
  }
  useEffect(() => {
    const id = localStorage.getItem("id");

    GetUser(id)
      .then((data) => {
        setuser(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [comment]);
  useEffect(() => {
    console.log(comment);
  }, [comment]);
  const { id } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log("item.id", id);
  const { conncted } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log("conncted ", conncted);

  useEffect(() => {
    getAnnonce(id)
      .then((data) => {
        setToy(data);
        console.log("yo");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    console.log("ani fel get use ali fi product ", id);
    getUser(id)
      .then((data) => {
        setUser(data);
        console.log("im the user", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleClick = () => {
    if (alredyfavorie) {
      handleClickremovefavorie();
      dispatch(setIsAFavorie(false));
      // setIsFavorite(false);
    } else {
      handleClickaddfavorie();
      dispatch(setIsAFavorie(true));
      // setIsFavorite(true);
    }
  };

  const handleClickaddfavorie = () => {
    addToFavorie(id)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickremovefavorie = () => {
    removeFromFavorie(id)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogcomment, setOpenDialogcomment] = useState(false);

  const handleviewallcomments = () => {
    setOpenDialogcomment(true);
  };
  const handleButtonClick = () => {
    setOpenDialog(true);
  };
  const alredyfavorie = useSelector((state) => state.isafavorie);
  console.log("Toy", Toy.estArchive);

  const soldout = useSelector((state) => state.soldout);
  const idannonce = useSelector((state) => state.idannonce);
  const buttonStyle = {
    background: "none",
    border: "none",
    color: isHovered ? "purple" : "gray",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
    fontSize: "15px",
    marginLeft: "275px",
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${fluid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        "@media (max-width: 768px)": {
          backgroundSize: "cover",
        },
      }}
    >
      <Navbarheader style={{ position: "sticky", top: 0 }} />
      {/************************************************************************************* */}
      <div className="container">
        <Box
          sx={{
            width: "90vh",

            // padding: "90px",
            height: "600px",
            alignItems: "center",
            display: "flex",
            // backgroundColor: "pink",
            justifyContent: "center",
            //marginRight: "20px",
          }}
        >
          {conncted === "true" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  height: "500px",
                }}
              >
                <IconButton
                  variant="contained"
                  color="default  "
                  onClick={handleButtonClick}
                  title="Modify Product"
                >
                  <MoreVertRoundedIcon color="secondary" />
                </IconButton>
              </div>
              <Modifyproduct
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                id_annonce={Toy.id_annonce}
              />
            </div>
          )}
          {Toy.estArchive === true ? (
            <>
              <img
                src={`http://localhost:2023/images/annonces/${Toy.picturePath}`}
                alt="photo"
                style={{
                  filter: "grayscale(100%)",
                  height: "480px",
                  width: "480px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "37%",
                  left: "24%",
                  transform: "rotate(0.14turn)",
                  color: "red  ",
                  padding: "10px",
                  fontSize: "80px",
                  fontWeight: "bold",
                  zIndex: 1,
                }}
              >
                SOLD OUT
              </div>
            </>
          ) : (
            <img
              src={`http://localhost:2023/images/annonces/${Toy.picturePath}`}
              alt="photo"
              style={{ height: "480px", width: "480px" }}
            />
          )}
          <div className="responsivediv">
            <IconButton
              variant="contained"
              color="error"
              onClick={handleClick}
              title="Add to favorite"
              sx={{ paddingBottom: "8px" }}
            >
              {alredyfavorie ? (
                <FavoriteIcon fontSize="large" color="secondary" />
              ) : (
                <FavoriteBorderRoundedIcon fontSize="large" color="secondary" />
              )}
            </IconButton>
          </div>
        </Box>
        <Box
          sx={{
            padding: "100px",
            width: "90vh",
            height: "600px",
            // backgroundColor: "yellow",
          }}
        >
          <div style={{ margin: "0px", display: "flex", alignItems: "column" }}>
            <IconButton>
              <Avatar
                component={Link}
                src={`http://localhost:2023/images/profiles/${User.profilePicture}`}
                to={`/profilenonconnected?id=${User.id_user}`}
                sx={{ height: "40px", width: "40px" }}
              />
            </IconButton>
            <p style={{ margin: "0px", marginTop: "15px" }}>{User.username}</p>
          </div>

          <p
            style={{
              marginBottom: "30px",
              fontFamily: "Monospaced",
              fontSize: "40px",
              color: "purple",
            }}
          >
            {Toy.name}
            <Chip
              label={Toy.type}
              variant="outlined"
              sx={{
                height: "20px",
                marginLeft: "40px",
                color: "#720e9e",
              }}
            />
            <Chip
              label={Toy.state}
              variant="outlined"
              sx={{ height: "20px", color: "#720e9e", marginLeft: "10px" }}
            />
          </p>
          <p style={{ fontSize: "12px" }}>{Toy.description}</p>
          <h3
            style={{
              marginBottom: "30px",
              fontFamily: "Monospaced",
              color: "purple",
            }}
          >
            {Toy.price}
          </h3>
          <p
            style={{
              fontSize: "17px",
              fontFamily: "Monospaced",
              color: "#810CA8",
            }}
          >
            Child's age:
            <span style={{ color: "gray", marginLeft: "10px" }}>
              {Toy.ageChild}
            </span>
          </p>

          <p
            style={{
              fontSize: "17px",
              fontFamily: "Monospaced",
              color: "#810CA8",
            }}
          >
            Product's age:
            <span style={{ color: "gray", marginLeft: "10px" }}>
              {Toy.ageToy}
            </span>
          </p>

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Avatar
              src={`http://localhost:2023/images/profiles/${user.profilePicture}`}
              to={`/profilenonconnected?id=${user.id_user}`}
              sx={{ height: "40px", width: "40px" }}
            />
            <CustomInput
              sx={{
                marginLeft: "10px",
                height: "70px",
                width: "350px",
              }}
              value={comment}
              onChange={(e) => updateComment(e.target.value)}
              placeholder="Write your comment here ..."
              startAdornment={<InputAdornment> </InputAdornment>}
              endAdornment={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }} />
                  <StyledIconButton onClick={() => submitComment()}>
                    <SendRoundedIcon fontSize="small" />
                  </StyledIconButton>
                </Box>
              }
            />
          </Box>
          <div sx={{ padding: "10px" }}>
            <Comments
              open={openDialogcomment}
              onClose={() => setOpenDialogcomment(false)}
              user={user}
              idannonce={Toy.id_annonce}
            />
          </div>
          <button
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleviewallcomments}
          >
            View all comments
          </button>
        </Box>
      </div>
    </Box>
  );
}

export default Product;
