import React, { useState } from 'react';
import { 
  Box, Button, Typography, Paper, 
  Container, Checkbox, Chip
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../components/Header';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DoneIcon from '@mui/icons-material/Done';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import WarningIcon from '@mui/icons-material/Warning';

const DashboardOrders = () => {
  // Sample data
  const [orders, setOrders] = useState([
    { id: 1, productName: 'Dates Jam (500g)', quantity: 50, orderDate: '2023-05-01', status: 'Pending' },
    { id: 2, productName: 'Premium Dates (1kg)', quantity: 30, orderDate: '2023-05-02', status: 'Processing' },
    { id: 3, productName: 'Amla in Honey (250ml)', quantity: 75, orderDate: '2023-05-03', status: 'Shipped' },
    { id: 4, productName: 'Almond in Honey (400g)', quantity: 42, orderDate: '2023-05-04', status: 'Pending' },
    { id: 5, productName: 'Medjool Dates (200g)', quantity: 68, orderDate: '2023-05-05', status: 'Processing' },
  ]);

  const [products, setProducts] = useState([
    { id: 1, productName: 'Dates Jam (500g)', totalCount: 120, batch: 'B-2023-05', status: 'In Stock' },
    { id: 2, productName: 'Premium Dates (1kg)', totalCount: 85, batch: 'B-2023-04', status: 'Low Stock' },
    { id: 3, productName: 'Amla in Honey (250ml)', totalCount: 210, batch: 'B-2023-06', status: 'In Stock' },
    { id: 4, productName: 'Almond in Honey (400g)', totalCount: 45, batch: 'B-2023-05', status: 'Low Stock' },
    { id: 5, productName: 'Medjool Dates (200g)', totalCount: 0, batch: 'B-2023-03', status: 'Out of Stock' },
  ]);

  const [selected, setSelected] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newOrder = {
        id: orders.length + 1,
        productName: `New Product ${orders.length + 1}`,
        quantity: Math.floor(Math.random() * 100) + 1,
        orderDate: new Date().toISOString().split('T')[0],
        status: 'Pending'
      };
      setOrders([...orders, newOrder]);
    }
  };

  const renderStatusCell = (params) => {
    const status = params.value;
    let icon, color;
    
    switch(status) {
      case 'Pending': icon = <WarningIcon />; color = 'warning'; break;
      case 'Processing': icon = <InventoryIcon />; color = 'info'; break;
      case 'Shipped': icon = <LocalShippingIcon />; color = 'primary'; break;
      case 'Delivered': icon = <DoneIcon />; color = 'success'; break;
      default: icon = null; color = 'default';
    }
    
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Chip
          icon={icon}
          label={status}
          color={color}
          variant="outlined"
          sx={{ width: '90%', justifyContent: 'center' }}
        />
      </Box>
    );
  };

  const renderStockStatus = (params) => {
    const status = params.value;
    let icon, color;
    
    switch(status) {
      case 'In Stock': icon = <DoneIcon />; color = 'success'; break;
      case 'Low Stock': icon = <WarningIcon />; color = 'warning'; break;
      case 'Out of Stock': icon = <WarningIcon color="error" />; color = 'error'; break;
      default: icon = null; color = 'default';
    }
    
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Chip
          icon={icon}
          label={status}
          color={color}
          variant="outlined"
          sx={{ width: '90%', justifyContent: 'center' }}
        />
      </Box>
    );
  };

  const ordersColumns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 100, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'productName', 
      headerName: 'PRODUCT', 
      width: 300, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'quantity', 
      headerName: 'QTY', 
      width: 150, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'orderDate', 
      headerName: 'ORDER DATE', 
      width: 200, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'status', 
      headerName: 'STATUS', 
      width: 200, 
      headerAlign: 'center', 
      align: 'center',
      renderCell: renderStatusCell,
      cellClassName: 'centered-cell' 
    },
    {
      field: 'select',
      headerName: 'SELECT',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Checkbox 
            checked={selected.includes(params.id)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelected([...selected, params.id]);
              } else {
                setSelected(selected.filter(id => id !== params.id));
              }
            }}
          />
        </Box>
      ),
      cellClassName: 'centered-cell' 
    },
  ];

  const productsColumns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 100, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'productName', 
      headerName: 'PRODUCT', 
      width: 300, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'totalCount', 
      headerName: 'INVENTORY', 
      width: 150, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'batch', 
      headerName: 'BATCH NO.', 
      width: 200, 
      headerAlign: 'center', 
      align: 'center',
      cellClassName: 'centered-cell' 
    },
    { 
      field: 'status', 
      headerName: 'STOCK STATUS', 
      width: 200, 
      headerAlign: 'center', 
      align: 'center',
      renderCell: renderStockStatus,
      cellClassName: 'centered-cell' 
    },
    {
      field: 'print',
      headerName: 'ACTIONS',
      width: 200,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => alert(`Printing labels for ${params.row.productName}`)}
            disabled={params.row.status === 'Out of Stock'}
            sx={{ px: 3 }}
          >
            Print
          </Button>
        </Box>
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
      <Header title="Orders Management" />
      
      <Container maxWidth="xl" sx={{ 
        py: 3,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center everything horizontally
        gap: 4
      }}>
        {/* Upload Button */}
        <Box sx={{ 
          width: '100%',
          maxWidth: 1400,
          display: 'flex',
          justifyContent: 'flex-end',
          px: 3
        }}>
          <Button
            component="label"
            variant="contained"
            startIcon={<FileUploadIcon />}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '0.875rem',
              fontWeight: 600,
              backgroundColor: '#1e40af',
              '&:hover': { backgroundColor: '#1e3a8a' }
            }}
          >
            Upload Orders
            <input type="file" hidden accept=".xlsx,.xls" onChange={handleFileUpload} />
          </Button>
        </Box>

        {/* Tables - Centered with max width */}
        <Box sx={{ 
          width: '100%',
          maxWidth: 1400,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          px: 3
        }}>
          {/* Orders Table */}
          <Paper sx={{ 
            p: 3, 
            borderRadius: '12px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            width: '100%'
          }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              mb: 3,
              color: '#1e40af',
              textAlign: 'center'
            }}>
              CURRENT ORDERS
            </Typography>
            
            <Box sx={{ height: 450, width: '100%' }}>
              <DataGrid
                rows={orders}
                columns={ordersColumns}
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

          {/* Products Table */}
          <Paper sx={{ 
            p: 3, 
            borderRadius: '12px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            width: '100%'
          }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              mb: 3,
              color: '#1e40af',
              textAlign: 'center'
            }}>
              PRODUCT INVENTORY
            </Typography>
            
            <Box sx={{ height: 450, width: '100%' }}>
              <DataGrid
                rows={products}
                columns={productsColumns}
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
      </Container>
    </Box>
  );
};

export default DashboardOrders;