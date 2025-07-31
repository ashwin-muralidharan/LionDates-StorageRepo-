import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../components/Header';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const DashboardProduction = () => {
  const [products, setProducts] = useState([
    { id: 1, productName: 'Strawberry Jam', batch: 'B-2023-05', quantity: 120, status: 'Pending', startDate: '2023-05-01', completion: 35 },
    { id: 2, productName: 'Premium Dates', batch: 'B-2023-04', quantity: 85, status: 'In Progress', startDate: '2023-04-25', completion: 75 },
    { id: 3, productName: 'Organic Honey', batch: 'B-2023-06', quantity: 210, status: 'In Progress', startDate: '2023-06-10', completion: 60 },
    { id: 4, productName: 'Almond Butter', batch: 'B-2023-05', quantity: 45, status: 'Pending', startDate: '2023-05-15', completion: 20 },
    { id: 5, productName: 'Dried Mango', batch: 'B-2023-03', quantity: 90, status: 'Completed', startDate: '2023-03-20', completion: 100 },
    { id: 6, productName: 'Coconut Oil', batch: 'B-2023-07', quantity: 150, status: 'In Progress', startDate: '2023-07-05', completion: 45 },
    { id: 7, productName: 'Chia Seeds', batch: 'B-2023-06', quantity: 75, status: 'Pending', startDate: '2023-06-18', completion: 10 },
    { id: 8, productName: 'Peanut Butter', batch: 'B-2023-07', quantity: 200, status: 'In Progress', startDate: '2023-07-12', completion: 80 },
    { id: 9, productName: 'Maple Syrup', batch: 'B-2023-04', quantity: 65, status: 'Completed', startDate: '2023-04-30', completion: 100 },
    { id: 10, productName: 'Granola Mix', batch: 'B-2023-08', quantity: 180, status: 'Pending', startDate: '2023-08-01', completion: 5 },
    { id: 11, productName: 'Pumpkin Seeds', batch: 'B-2023-07', quantity: 95, status: 'In Progress', startDate: '2023-07-20', completion: 65 },
    { id: 12, productName: 'Sunflower Oil', batch: 'B-2023-06', quantity: 120, status: 'Completed', startDate: '2023-06-25', completion: 100 },
    { id: 13, productName: 'Quinoa Flour', batch: 'B-2023-08', quantity: 70, status: 'Pending', startDate: '2023-08-05', completion: 15 },
    { id: 14, productName: 'Oat Milk', batch: 'B-2023-07', quantity: 250, status: 'In Progress', startDate: '2023-07-15', completion: 55 },
    { id: 15, productName: 'Dark Chocolate', batch: 'B-2023-05', quantity: 180, status: 'Completed', startDate: '2023-05-28', completion: 100 },
    { id: 16, productName: 'Almond Milk', batch: 'B-2023-08', quantity: 200, status: 'Pending', startDate: '2023-08-10', completion: 25 },
    { id: 17, productName: 'Cashew Butter', batch: 'B-2023-06', quantity: 90, status: 'In Progress', startDate: '2023-06-30', completion: 70 },
    { id: 18, productName: 'Brown Rice', batch: 'B-2023-07', quantity: 150, status: 'Pending', startDate: '2023-07-25', completion: 30 },
    { id: 19, productName: 'Apple Cider', batch: 'B-2023-05', quantity: 80, status: 'Completed', startDate: '2023-05-20', completion: 100 },
    { id: 20, productName: 'Flax Seeds', batch: 'B-2023-08', quantity: 110, status: 'In Progress', startDate: '2023-08-15', completion: 50 },
  ]);

  const handleComplete = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, status: 'Completed' } : product
    ));
  };

  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 80, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'productName', 
      headerName: 'PRODUCT', 
      width: 200, 
      headerAlign: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'batch', 
      headerName: 'BATCH NO.', 
      width: 150, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'quantity', 
      headerName: 'QUANTITY', 
      width: 120, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'startDate', 
      headerName: 'START DATE', 
      width: 150, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'completion', 
      headerName: 'COMPLETION %', 
      width: 150, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell',
      renderCell: (params) => `${params.value}%`
    },
    {
      field: 'status',
      headerName: 'STATUS',
      width: 180,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === 'Completed' ? 'success' : 
            params.value === 'In Progress' ? 'warning' : 'default'
          }
          icon={
            params.value === 'Completed' ? <CheckCircleIcon fontSize="small" /> : 
            params.value === 'In Progress' ? <AutorenewIcon fontSize="small" /> : 
            <PendingIcon fontSize="small" />
          }
          sx={{ minWidth: 120 }}
        />
      ),
      cellClassName: 'centered-cell' 
    },
    {
      field: 'actions',
      headerName: 'ACTIONS',
      width: 180,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        params.row.status !== 'Completed' && (
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => handleComplete(params.row.id)}
            sx={{ px: 3 }}
          >
            Complete
          </Button>
        )
      ),
      cellClassName: 'centered-cell' 
    },
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#f8fafc',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header title="Production Dashboard" />
      
      <Box sx={{ 
        p: 3,
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Paper sx={{ 
          p: 3, 
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          width: '100%',
          maxWidth: 1300
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 600, 
            mb: 3,
            color: '#1e40af',
            textAlign: 'center'
          }}>
            PRODUCTION SCHEDULE
          </Typography>
          
          <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={products}
              columns={columns}
              hideFooter
              disableColumnMenu
              sx={{
                border: 'none',
                '& .MuiDataGrid-cell': {
                  borderBottom: '1px solid rgba(224, 224, 224, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  py: 1.5
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#f0f4f8',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#1e40af'
                },
                '& .MuiDataGrid-row': {
                  '&:hover': { backgroundColor: 'rgba(30, 64, 175, 0.04)' }
                },
                '& .centered-cell': {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }
              }}
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default DashboardProduction;