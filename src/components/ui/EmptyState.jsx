import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const EmptyState = ({ 
  icon = <InsertDriveFileOutlinedIcon fontSize="large" />,
  title = "No data available",
  description = "There are no items to display here yet",
  action
}) => {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      p: 4,
      border: '1px dashed',
      borderColor: 'divider',
      borderRadius: 2
    }}>
      <Box sx={{ 
        display: 'inline-flex',
        p: 2,
        mb: 2,
        color: 'text.secondary',
        backgroundColor: 'action.hover',
        borderRadius: '50%'
      }}>
        {React.cloneElement(icon, { sx: { fontSize: 48 } })}
      </Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {description}
      </Typography>
      {action && (
        <Button variant="contained" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;