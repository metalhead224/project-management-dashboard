import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sidebarStyles } from './Styles';
import { useNavigate } from 'react-router-dom';
import { mainSidebarList } from './const/SidebatItems';

const Sidebar = () => {

    const navigate = useNavigate();

  return (
    <Drawer
        sx={sidebarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainSidebarList.map((item, index) => (
            <ListItem key= {item.id} disablePadding>
              <ListItemButton
              onClick={() => navigate(item.route)}
              >
                <ListItemIcon sx={sidebarStyles.icons}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
  )
}

export default Sidebar