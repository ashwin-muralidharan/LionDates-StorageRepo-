import React from 'react';
import { 
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  Factory as FactoryIcon,
  LocalShipping as ShippingIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Orders', icon: <InventoryIcon />, path: '/orders' },
    { text: 'Production', icon: <FactoryIcon />, path: '/production' },
    { text: 'Warehouse', icon: <ShippingIcon />, path: '/warehouse' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box',
        },
      }}
    >
      <Tooltip title="Company Logo" placement="right">
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/static/images/logo.png" 
            alt="Company Logo" 
            style={{ height: 40 }} 
          />
        </Box>
      </Tooltip>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;