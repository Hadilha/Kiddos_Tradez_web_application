import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Typography from "@mui/material/Typography";
import { saveComment } from "../../services/CommentService";

import "./Comments.css";
import Listcomments from "../Listcomments/Listcomments";
import AverageTimeCalculator from "../AverageTimeCalculator/AverageTimeCalculator";
import { Link } from "react-router-dom";
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
export const customStyle = `
.custom-style {
  font-weight: 400;
  border-radius: 20px;
  color: \${theme.palette.mode === "light" ? grey[300] : grey[500]};
  background-color: #ededfc;
  border: 1px solid \${theme.palette.mode === "dark" ? purpl[700] : grey[200]};
  display: flex;
  align-items: start;
  justify-content: start;
}

.custom-style.\${inputUnstyledClasses.focused} {
  border-color: \${purpl};
}

.custom-style:hover {
  border-color: \${purpl[400]};
}

.custom-style:focus-visible {
  outline: 0;
}
`;

const StyledInputRoot = styled("div")(
  ({ theme }) => `
 
  font-weight: 400;
  border-radius: 20px;
  color: ${theme.palette.mode === "light" ? grey[300] : grey[500]};
  background-color: #ededfc;
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
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
      {...other}
    >
      {onClose ? (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "50%",
              }}
            >
              {children}
            </div>
            <div
              style={{
                backgroundColor: "#E0E3E7",
                borderRadius: "30px",
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton aria-label="close" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </div>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Comments({ open, onClose, user, idannonce }) {
  const [comment, setComment] = useState("");
  const id = localStorage.getItem("id");

  function updateComment(value) {
    let commentCopy = comment;
    commentCopy = value;
    setComment(commentCopy);
  }
  const [count, setCount] = useState(0);
  const submitComment = () => {
    saveComment(idannonce, comment)
      .then((data) => {
        console.log(data);
        setComment("");
        setCount(count + 1);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={onClose}
        sx={{
          color: "#2D033B",
        }}
      >
        Comments
      </BootstrapDialogTitle>

      <DialogContent dividers>
        <Listcomments user={user} id={idannonce} count={count} />

        <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <Link
            to={`/profilenonconnected?id=${user.id_user}`}
            style={{ textDecoration: "none" }}
          >
            <Avatar
              src={`http://localhost:2023/images/profiles/${user.profilePicture}`}
              to={`/profilenonconnected?id=${user.id_user}`}
              sx={{ height: "40px", width: "40px" }}
            />
          </Link>
          <CustomInput
            sx={{
              marginLeft: "10px",
              height: "70px",
              width: "1000px",
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
      </DialogContent>
    </Dialog>
  );
}
