import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { css } from "styled-components";
import { useDispatch } from "react-redux";
import { setSoldOut } from "../../redux/Action";
import { setIdAnnonce } from "../../redux/Action";
import { modifyAnnonce } from "../../services/AnnonceService";
import "./Modifyproduct.css";
import { Unarchiveannonce } from "../../services/AnnonceService";

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
 width:213px;
 height:55px;
  font-weight: 400;
  border-radius: 5px;
  color: #810CA8;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${purpl[400]};
  box-shadow: 0px 2px  5px #b393d3 ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };
  display: flex;
  align-items: center;
  justify-content: center;


  &.${inputUnstyledClasses.focused} {
    border-color: ${purpl};

  }

  &:hover {
    border-color: ${purpl[400]};
  }

  // firefox
  &:focus-visible {
    border-color: ${purpl[400]};
  }
`
);
const StyledInputElement = styled("input")(
  ({ theme }) => `
  font-size: 1.1rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
 
  border: none;
  border-radius: inherit;
  padding: 0px 0px;
  outline: 0;
  
`
);
const InputAdornment = styled("div")`

margin:0px,
  display: none;
  align-items: flex;
 
  padding:0px;
  background-color:blue;
`;
const useStyles = makeStyles((theme) => ({
  photoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
    width: "400px",
    border: "1px ridge #d0d0d0dd ",
    borderRadius: "10px",
    cursor: "pointer",
  },
  photo: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  inputFocused: {
    borderColor: "#purpl",
  },
  inputHover: {
    borderColor: "#purpl[400]",
  },
}));
const CssTextField = styled(TextField)`
  ${({ theme }) =>
    css`
      --color-primary: #7f00ff;
      --color-secondary: #6600cc;
      --color-tertiary: #9f40ff;

      & label.Mui-focused {
        color: var(--color-primary);
      }

      & .MuiOutlinedInput-root {
        fieldset {
          border-color: var(--color-primary);
        }

        &:hover fieldset {
          border-color: var(--color-secondary);
        }

        &.Mui-focused fieldset {
          border-color: var(--color-primary);
          border-width: 1px;
        }
      }
    `}
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

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const categories = [
  {
    value: "Blocks",
  },
  {
    value: "Magnetic Tiles",
  },
  {
    value: "Marble Runs",
  },
  {
    value: "Construction Sets",
  },
  {
    value: "Gear Sets",
  },
  {
    value: "Connectors",
  },
  {
    value: "Science Kits",
  },
  {
    value: "Math Games",
  },
  {
    value: "Language Learning Toys",
  },
  {
    value: "Geography Puzzles",
  },
  {
    value: "Coding Games",
  },
  {
    value: "Dollhouses",
  },
  {
    value: "Play Kitchen Sets",
  },
  {
    value: "Workbenches",
  },
  {
    value: "Doctor Kits",
  },
  {
    value: "Play Tools",
  },
  {
    value: "Teddy bears",
  },
  {
    value: "Other furry creatures",
  },
  {
    value: "Drawing Sets",
  },
  {
    value: "Painting Kits",
  },
  {
    value: "Bead Jewelry Kits",
  },
  {
    value: "Clay and Dough Sets",
  },
  {
    value: "Sewing Machines",
  },
  {
    value: "Trampolines",
  },
  {
    value: "Playhouses ",
  },
  {
    value: "Slides",
  },
  {
    value: "Swings",
  },
  {
    value: "Bikes",
  },
  {
    value: "Scooters",
  },
];
const state = [{ value: "New" }, { value: "old" }];
const childsage = [
  { value: "0-2" },
  { value: "2-4" },
  { value: "4-6" },
  { value: "+6" },
];
const productage = [
  { value: "0-12 months" },
  { value: "1-2 years" },
  { value: "3-5 years" },
  { value: "6-8 years" },
  { value: "9-12 years" },
  { value: "12+ years " },
];
const type = [{ value: "For Sale" }, { value: "For Exchange" }];
export default function Modifyproduct({ open, onClose, id_annonce }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const [values, setValues] = React.useState({
    name: "",
    price: "",
    state: "",
    ageChild: "",
    ageToy: "",
    description: "",
    category: "",
    type: "",
  });

  const handlemodifyannonce = () => {
    const annonce = {
      name: values.name,
      price: values.price,
      state: values.state,
      type: "",
      ageChild: values.ageChild,
      ageToy: values.ageToy,
      description: values.description,
      category: values.category,
    };

    if (values.type === "For Sale") {
      annonce.type = "For_Sale";
    } else if (values.type === "For Exchange") {
      annonce.type = "For_Exchange";
    }

    console.log("annonce", annonce);
    const id = localStorage.getItem("id");

    modifyAnnonce(id_annonce, annonce)
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
      });

    onClose();
  };

  const dispatch = useDispatch();

  const handlesoldout = () => {
    Unarchiveannonce(id_annonce)
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
      });

    onClose();
  };

  return (
    <Dialog open={open}>
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={onClose}
        sx={{ color: "#2D033B", textAlign: "center" }}
      >
        Modify Annoce
      </BootstrapDialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "column",
          // backgroundColor: "blue",
        }}
        dividers
      >
        <Box
          sx={{
            width: "276px",
            padding: "20px",
            height: "450px",
            // backgroundColor: "yellow",
          }}
        >
          <FormControl variant="standard" sx={{ margin: "10px" }}>
            <Box>
              <InputLabel shrink htmlFor=" name ">
                Name
              </InputLabel>
              <CustomInput
                name="name"
                onChange={handleChange}
                value={values.name}
                sx={{
                  marginTop: "20px",
                  // backgroundColor: "pink"
                }}
              />
            </Box>
          </FormControl>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <InputLabel
              htmlFor="outlined-select-currency"
              style={{
                color: "balck",
                margin: "0px",
                fontSize: "0.8rem",
                fontFamily: "inherit",
                marginLeft: "9px",
              }}
            >
              Categorie
            </InputLabel>
            <CssTextField
              id="outlined-select-currency"
              name="category"
              value={values.category}
              onChange={handleChange}
              select
              //defaultValue="Blocks"
              InputLabelProps={{
                shrink: true,
                style: {
                  top: "-20px",
                  height: "20px",
                  backgroundColor: "purple",
                  border: "2px solid red",
                },
              }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: "200px",
                    },
                  },
                },
              }}
            >
              {categories.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  //style={{ height: "40px" }}
                >
                  {option.value}
                </MenuItem>
              ))}
            </CssTextField>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <InputLabel
              htmlFor="outlined-select-currency"
              style={{
                color: "balck",
                margin: "0px",
                fontSize: "0.8rem",
                fontFamily: "inherit",
                marginLeft: "9px",
              }}
            >
              State
            </InputLabel>
            <CssTextField
              id="outlined-select-currency"
              name="state"
              value={values.state}
              onChange={handleChange}
              select
              //defaultValue="New"
              InputLabelProps={{
                shrink: true,
                style: {
                  top: "-20px",
                  height: "20px",
                },
              }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: "200px",
                    },
                  },
                },
              }}
            >
              {state.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  //style={{ height: "40px" }}
                >
                  {option.value}
                </MenuItem>
              ))}
            </CssTextField>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <InputLabel
              htmlFor="outlined-select-currency"
              style={{
                color: "balck",
                margin: "0px",
                fontSize: "0.8rem",
                fontFamily: "inherit",
                marginLeft: "9px",
              }}
            >
              Type
            </InputLabel>
            <CssTextField
              id="outlined-select-currency"
              name="type"
              value={values.type}
              onChange={handleChange}
              select
              //defaultValue="New"
              InputLabelProps={{
                shrink: true,
                style: {
                  top: "-20px",
                  height: "20px",
                },
              }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: "200px",
                    },
                  },
                },
              }}
            >
              {type.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  //style={{ height: "40px" }}
                >
                  {option.value}
                </MenuItem>
              ))}
            </CssTextField>
          </Box>
        </Box>
        <Box
          sx={{
            width: "276px",
            padding: "20px",
            height: "300px",
            // marginLeft: "40px",
            // backgroundColor: "yellow",
          }}
        >
          <FormControl variant="standard" sx={{ margin: "10px" }}>
            <Box>
              <InputLabel shrink htmlFor=" price ">
                Price
              </InputLabel>
              <CustomInput
                name="price"
                onChange={handleChange}
                value={values.price}
                sx={{ marginTop: "20px" }}
                id="price"
              />
            </Box>
          </FormControl>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              //backgroundColor: "red",
            }}
            noValidate
            autoComplete="off"
          >
            <InputLabel
              htmlFor="outlined-select-currency"
              style={{
                color: "balck",
                margin: "0px",
                fontSize: "0.8rem",
                fontFamily: "inherit",
                marginLeft: "9px",
              }}
            >
              Child's age
            </InputLabel>
            <CssTextField
              id="outlined-select-currency"
              name="ageChild"
              value={values.ageChild}
              onChange={handleChange}
              select
              defaultValue="New"
              InputLabelProps={{
                shrink: true,
                style: {
                  top: "-20px",
                  height: "20px",
                },
              }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: "200px",
                    },
                  },
                },
              }}
            >
              {childsage.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  //style={{ height: "40px" }}
                >
                  {option.value}
                </MenuItem>
              ))}
            </CssTextField>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              //backgroundColor: "red",
            }}
            noValidate
            autoComplete="off"
          >
            <InputLabel
              htmlFor="outlined-select-currency"
              style={{
                margin: "0px",
                fontSize: "0.8rem",
                fontFamily: "inherit",
                marginLeft: "9px",
              }}
            >
              Product age
            </InputLabel>
            <CssTextField
              //id="outlined-select-currency"
              name="ageToy"
              value={values.ageToy}
              onChange={handleChange}
              select
              defaultValue="New"
              InputLabelProps={{
                shrink: true,
                style: {
                  top: "-20px",
                  height: "20px",
                },
              }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: "200px",
                    },
                  },
                },
              }}
            >
              {productage.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  //style={{ height: "40px" }}
                >
                  {option.value}
                </MenuItem>
              ))}
            </CssTextField>
            <InputLabel
              shrink
              // htmlFor=" Description "
              sx={{
                marginTop: "10px",
                marginLeft: "10px",
                marginBottom: "0px",
              }}
            >
              Description
            </InputLabel>

            <CssTextField
              name="description"
              value={values.description}
              onChange={handleChange}
              id="outlined-multiline-static"
              multiline
              rows={3}
              sx={{ marginBottom: "0px" }}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button autoFocus onClick={handlesoldout} sx={{ color: "#2D033B" }}>
          Sold Out
        </Button>
        <Button
          autoFocus
          onClick={handlemodifyannonce}
          sx={{ color: "#2D033B" }}
        >
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
