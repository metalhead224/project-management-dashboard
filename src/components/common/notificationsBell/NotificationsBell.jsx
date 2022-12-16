import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton, Tooltip } from "@mui/material";
import BasicMenu from "../basicMenu/BasicMenu";

const NotificationsBell = ({ iconColor, badgeContent }) => {

  const notifications = [
    {
      id: 0,
      label: 'First notification'
  },
  {
      id: 1,
      label: 'Second notification'
  },
  ];


  const newNotifications = `You have ${notifications.length} new notifications!`;
  const noNewNotifications = "No new notifications!";


  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleOpen(event) {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Tooltip title={notifications.length ? newNotifications : noNewNotifications}>
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
          anchorEl={anchorEl}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} 
        menuItems={notifications}
      />
    </div>
  );
};

export default NotificationsBell;
