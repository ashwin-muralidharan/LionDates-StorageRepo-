import React from 'react';
import { Box, CircularProgress, Backdrop } from '@mui/material';

const LoadingOverlay = ({ loading, message }) => {
  return (
    <Backdrop
      sx={{ 
        color: '#fff', 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: 'blur(4px)'
      }}
      open={loading}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <CircularProgress color="inherit" />
        {message && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
      </Box>
    </Backdrop>
  );
};

export default LoadingOverlay;