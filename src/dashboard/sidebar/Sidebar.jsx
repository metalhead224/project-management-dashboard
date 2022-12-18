import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { sidebarStyles } from "./Styles";
import { useNavigate } from "react-router-dom";
import { mainSidebarList } from "./const/SidebatItems";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer sx={sidebarStyles.drawer} variant="permanent" anchor="left">
      <Box sx={sidebarStyles.headerWrapper}>
        <Typography variant="h5" sx={sidebarStyles.header}>
          Task Management
        </Typography>
      </Box>

      <Divider />
      <List>
        {mainSidebarList.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon sx={sidebarStyles.icons}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
