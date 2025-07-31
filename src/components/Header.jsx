import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AppBar, Toolbar, Avatar,
  Menu, MenuItem, Typography, Box
} from '@mui/material';
import logo from '../assets/logo.png';

export default function Header({ title }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 1 }}>
      <Toolbar>
        {/* Left: Company Logo */}
        <Box 
          component="img"
          src={logo} 
          alt="Company Logo" 
          sx={{ 
            height: 40,
            mr: 2
          }} 
        />
        
        {title && (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        )}
        
        {/* Profile Avatar */}
        <Avatar 
          sx={{ 
            bgcolor: '#1e40af', 
            cursor: 'pointer',
            width: 40,
            height: 40
          }}
          onClick={handleProfileClick}
        >
          U
        </Avatar>
        
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
          <MenuItem onClick={() => navigate('/')}>Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}