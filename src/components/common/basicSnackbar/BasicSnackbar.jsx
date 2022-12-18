import React, { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BasicSnackbar = ({ onClose, severity, open, sx, message }) => {
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity={severity} sx={sx}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default BasicSnackbar;
