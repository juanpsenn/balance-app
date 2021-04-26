import React, { useRef, useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}));

function Account() {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleLogout = async () => {};

  const handleResponse = (response) => {};

  const handleErrorResponse = (response) => {
    console.log(response);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanldeParseUsername = () => {};

  // const handleLogout = async () => {
  //   try {
  //     handleClose();
  //     await dispatch(logout());
  //     history.push("/");
  //   } catch (error) {
  //     enqueueSnackbar("Unable to logout", {
  //       variant: "error",
  //     });
  //   }
  // };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        {/* <Avatar alt="User" className={classes.avatar} src={null} /> */}
        <Typography variant="h6" color="inherit">
          {`${hanldeParseUsername()}`}
        </Typography>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        {/* <MenuItem component={RouterLink} to="/app/social/profile">
          Profile
        </MenuItem>
        <MenuItem component={RouterLink} to="/app/account">
          Account
        </MenuItem> */}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Account;
