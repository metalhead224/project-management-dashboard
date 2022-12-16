import { Box } from "@mui/material";
import React from "react";
import spinner from "../../assets/svg/spinner.svg";

const Spinner = () => {

    const spinnerStyles ={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 50,
        fontSize: '20px'
    }

  return (
    <div className="flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <Box sx={spinnerStyles}>
        <img src={spinner} alt="loading..." className="h-24" />
      </Box>
    </div>
  );
};

export default Spinner;