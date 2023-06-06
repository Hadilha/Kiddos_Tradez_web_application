import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Forgotpassword.css";
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
import { useNavigate, NavLink } from "react-router-dom";
import { sendEmail } from "../../services/UserService";
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
  margin: 21px;
  display: flex;
  align-items: flex-start;
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
function Forgotpassword() {
  const [email, setemail] = useState("");

  const handleChange = (event) => {
    setemail(event.target.value);
  };
  const navigate = useNavigate();

  const handleSendemail = (e) => {
    sendEmail(email)
      .then((data) => {
        if (data) {
          console.log(data);
          navigate("/", { replace: true });
        } else {
          console.log("email not send");
        }
      })
      .catch((error) => {
        console.log(error);
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
            <FormControl
              variant="standard"
              sx={{
                //backgroundColor: "red",
                display: "flex",
                width: "80%",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
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
                <h3>Forgot Password </h3>
              </Typography>
              <br />
              <Typography
                style={{
                  fontSize: 12,
                  color: "#810CA8",
                  textAlign: "start",
                  width: "280px",
                }}
              >
                <p
                  style={{
                    color: "#C147E9",
                    textAlign: "start",
                    fontSize: 12,
                    margin: "0px",
                    marginBottom: "5px",
                  }}
                >
                  Lost your password ?
                </p>
                Please enter your email address. You will receive a link to
                create a new password via email.
              </Typography>
              <br />

              <Box style={{ display: "flex", flexDirection: "center" }}>
                <InputLabel
                  shrink
                  htmlFor=" email"
                  sx={{
                    color: "#810CA8",
                    marginTop: "120px",
                    //   marginLeft: "25px",
                    padding: "30px",
                    "&.Mui-focused": { color: "purple" },
                  }}
                >
                  Email
                </InputLabel>
                <CustomInput
                  sx={{ marginTop: "20px" }}
                  onChange={handleChange}
                  value={email}
                  id="outlined-start-adornment"
                  startAdornment={<InputAdornment> </InputAdornment>}
                />
              </Box>

              <Button
                type="submit"
                color="secondary"
                variant="outlined"
                onClick={handleSendemail}
                sx={{ mt: 2, mb: 2, marginLeft: "0px", width: "274px" }}
              >
                Send email
              </Button>
            </FormControl>
          </Box>
        </Container>
      </React.Fragment>
    </Box>
  );
}

export default Forgotpassword;
