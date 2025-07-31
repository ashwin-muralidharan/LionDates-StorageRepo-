import React from 'react';
import { Box, Typography, Button, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const PageHeader = ({ title, breadcrumbs, action }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{ mb: 1 }}
      >
        {breadcrumbs.map((item, index) => (
          <Link 
            key={index} 
            href={item.href} 
            color={index === breadcrumbs.length - 1 ? 'text.primary' : 'inherit'}
            underline="hover"
          >
            {item.label}
          </Link>
        ))}
      </Breadcrumbs>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        {action && (
          <Button 
            variant="contained" 
            startIcon={action.icon}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PageHeader;