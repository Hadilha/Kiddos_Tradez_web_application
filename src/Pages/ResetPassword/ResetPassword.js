import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./ResetPassword.css";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { useState } from "react";
import PropTypes from "prop-types";
import backgroundImage from "../../Asserts/Logos/glassy.png";
import { Password } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import basestyle from "../../Components/Base.module.css";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/UserService";
import Navbarheader from "../../Components/Navbarheader/Navbarheader";
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
const IconButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border:none ;
  size:3px,
  
  background: inherit;
  cursor: pointer;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[700]};
  `
);
const StyledInputRoot = styled("div")(
  ({ theme }) => `
 
  font-weight: 400;
  border-radius: 5px;
  color: ${theme.palette.mode === "light" ? grey[300] : grey[500]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? purpl[700] : grey[200]};
  box-shadow: 0px 2px  5px #b393d3 ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };
  display: flex;
  align-items: center;
  justify-content: center;


  &.${inputUnstyledClasses.focused} {
    border-color: ${purpl};
    box-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3, 0px 0px 20px #b393d3;

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

const StyledInputElement = styled("input")(
  ({ theme }) => `
  font-size: 0.8rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: white;
  border: none;
  border-radius: inherit;
  outline: 0;
  width:230px;
`
);

const InputAdornment = styled("div")`
  margin: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const SmallVisibilityIcon = styled(Visibility)({
  fontSize: 16,
  marginRight: 5,
});
const SmallVisibilityOffIcon = styled(VisibilityOff)({
  fontSize: 16,
  marginRight: 5,
});

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
function ResetPassword() {
  const [values, setValues] = React.useState({
    password: "",
    confirmpassword: "",
    showPassword: false,
    showconfirmPassword: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowPasswordd = () => {
    setValues({
      showconfirmPassword: !values.showconfirmPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordd = (event) => {
    event.preventDefault();
  };
  const validateForm = (values) => {
    const error = {};

    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 8) {
      error.password = "Password must be at least 8 characters";
    } else if (!/^[A-Z]/.test(values.password)) {
      error.password = "Password must start with a capital letter";
    } else if (!/\d/.test(values.password)) {
      error.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(values.password)) {
      error.password = "Password must contain at least one special character";
    }

    if (!values.confirmpassword) {
      error.confirmpassword = "Confirm Password is required";
    } else if (values.confirmpassword !== values.password) {
      error.confirmpassword =
        "Confirmed password and password should be the same";
    }

    return error;
  };
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: ` ${token}`,
  };
  const handleSubmit = (e) => {
    setFormErrors(validateForm(values));
    resetPassword(values.password)
      .then((data) => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {" "}
      <Navbarheader style={{ width: "100%", height: "200px" }} />
      <React.Fragment>
        <Container maxWidth="xs">
          <Box
            sx={{
              backgroundColor: "#ffffff69",
              boxShadow: "0 8px 32px rgba(31,28,135,0.37)",
              backdropFilter: "blur(8.5px)",
              borderRadius: "10px",
              letterSpacing: "0ch.3rem",

              marginTop: "10vh",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              height: "400px",
            }}
          >
            <FormControl variant="standard" sx={{ padding: "50px" }}>
              <Typography
                style={{
                  textAlign: "center",
                  marginTop: "0px",
                  color: "#fefdfe",
                  textShadow:
                    " 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,0px 0px 20px #b393d3",
                  fontFamily: "Proxima Nova,Verdana,Avenir Next",
                }}
              >
                <h3>Reset Password </h3>
              </Typography>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "center",
                  marginTop: "30px",
                }}
              >
                <InputLabel
                  shrink
                  htmlFor="password"
                  sx={{
                    color: "white",
                    marginTop: "100px",
                    marginLeft: "50px",
                    "&.Mui-focused": { color: "purple" },
                  }}
                >
                  New Password
                </InputLabel>
                <CustomInput
                  name="password"
                  id="password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment>
                      <IconButton
                        sx={{ backgroundColor: "white" }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <SmallVisibilityOffIcon />
                        ) : (
                          <SmallVisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
              <p className={basestyle.button_common}>{formErrors.password}</p>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "center",
                  marginTop: "20px",
                }}
              >
                <InputLabel
                  shrink
                  htmlFor="password"
                  sx={{
                    color: "white",
                    marginTop: "197px",
                    marginLeft: "50px",

                    "&.Mui-focused": { color: "purple" },
                  }}
                >
                  Confirm Password
                </InputLabel>
                <CustomInput
                  name="confirmpassword"
                  sx={{}}
                  id="password"
                  type={values.showconfirmPassword ? "text" : "password"}
                  value={values.confirmpassword}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment>
                      <IconButton
                        sx={{ backgroundColor: "white" }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordd}
                        onMouseDown={handleMouseDownPasswordd}
                      >
                        {values.showconfirmPassword ? (
                          <SmallVisibilityOffIcon />
                        ) : (
                          <SmallVisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>

              <p className={basestyle.button_common}>
                {formErrors.confirmpassword}
              </p>

              <Button
                type="submit"
                color="secondary"
                variant="outlined"
                onClick={handleSubmit}
                sx={{
                  mt: 2,
                  mb: 2,
                  marginLeft: "0px",
                  width: "274px",
                  marginTop: "15px",
                }}
              >
                Change Password
              </Button>
            </FormControl>
          </Box>
        </Container>
      </React.Fragment>
    </Box>
  );
}

export default ResetPassword;
