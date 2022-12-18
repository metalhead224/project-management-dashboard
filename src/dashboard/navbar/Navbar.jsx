import { Avatar, Typography } from "@mui/material";
import React from "react";
import NotificationsBell from "../../components/common/notificationsBell/NotificationsBell";
import { Box } from "@mui/system";

const Navbar = ({ title }) => {
  const headerStyles = {
    wrapper: {
      width: "100%",
      backgroundColor: "#009be5",
      padding: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "320px",
      "*": {
        marginRight: "5px",
      },

      navRight: {
        display: 'flex',
        marginRight: '25px'
      }
    },
    
    
  };

  return (
    <Box sx={headerStyles.wrapper}>
        <Box>
          <Typography variant="h1" color="white">
            {title}
          </Typography>
        </Box>
        <Box sx={headerStyles.wrapper.navRight}>
          <NotificationsBell iconColor="white" />
          <Avatar />
        </Box>
      </Box>
    
  );
};

export default Navbar;
