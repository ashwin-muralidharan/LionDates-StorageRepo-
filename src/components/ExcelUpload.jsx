import React from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
});

const ExcelUpload = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const simulatedData = [
        { productName: 'New Jam', quantity: 25 },
        { productName: 'Fresh Dates', quantity: 40 }
      ];
      onUpload(simulatedData);
    }
  };

  return (
    <Paper elevation={0} sx={{ p: 2, border: '1px dashed #e0e0e0', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Upload Order File</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Drag & drop your Excel file here or click to browse
        </Typography>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Select File
          <VisuallyHiddenInput 
            type="file" 
            accept=".xlsx, .xls" 
            onChange={handleFileChange} 
          />
        </Button>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
          Supported formats: .xlsx, .xls
        </Typography>
      </Box>
    </Paper>
  );
};

export default ExcelUpload;