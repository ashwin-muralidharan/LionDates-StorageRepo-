import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, Button, Typography, Paper, 
  Grid, Avatar, Chip, Container,
  Divider 
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../components/Header';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Import images from assets
import jamImage from '../assets/products/jam.jpg';
import datesImage from '../assets/products/dates.jpg';
import honeyImage from '../assets/products/honey.jpg';
import almondsImage from '../assets/products/almonds.jpg';
import nutsImage from '../assets/products/nuts.jpg';
import nutImage from '../assets/products/nut.jpg';
import datebarsImage from '../assets/products/date-bars.jpg';
import medjoolImage from '../assets/products/medjool-dates.jpg';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productData = {
    1: {
      name: 'Dates Jam',
      image: jamImage,
      description: 'Premium organic dates jam',
      orders: [
        { id: 1, productName: 'Dates Jam (500g)', quantity: 50, orderDate: '2023-05-01', dispatch: 'Chennai' },
        { id: 2, productName: 'Dates Jam (500g)', quantity: 30, orderDate: '2023-05-02', dispatch: 'Trichy' },
        { id: 3, productName: 'Dates Jam (500g)', quantity: 75, orderDate: '2023-05-03', dispatch: 'Hyderabad' },
        { id: 4, productName: 'Dates Jam (500g)', quantity: 45, orderDate: '2023-05-10', dispatch: 'Tirupati' },
        { id: 5, productName: 'Dates Jam (500g)', quantity: 60, orderDate: '2023-05-15', dispatch: 'Madurai' },
        { id: 6, productName: 'Dates Jam (500g)', quantity: 25, orderDate: '2023-05-20', dispatch: 'Mangalore' },
        { id: 7, productName: 'Dates Jam (500g)', quantity: 40, orderDate: '2023-05-22', dispatch: 'Theni' },
      ],
      inventory: [
        { id: 1, productName: 'Dates Jam (500g)', totalCount: 120, batch: 'B-2023-05', status: 'Dispatched' },
        { id: 2, productName: 'Dates Jam (500g)', totalCount: 85, batch: 'B-2023-04', status: 'Processing' },
        { id: 3, productName: 'Dates Jam (500g)', totalCount: 150, batch: 'B-2023-06', status: 'Dispatched' },
        { id: 4, productName: 'Dates Jam (500g)', totalCount: 65, batch: 'B-2023-07', status: 'Processing' },
        { id: 5, productName: 'Dates Jam (500g)', totalCount: 90, batch: 'B-2023-08', status: 'Pending' },
        { id: 6, productName: 'Dates Jam (500g)', totalCount: 110, batch: 'B-2023-09', status: 'Dispatched' },
        { id: 7, productName: 'Dates Jam (500g)', totalCount: 35, batch: 'B-2023-10', status: 'Processing' },
      ]
    },
    2: {
      name: 'Premium Dates (1kg)',
      image: datesImage,
      description: 'Premium dates from Saudi Arabia',
      orders: [
        { id: 8, productName: 'Premium Dates (1kg)', quantity: 42, orderDate: '2023-05-04', dispatch: 'Trichy' },
        { id: 9, productName: 'Premium Dates (1kg)', quantity: 68, orderDate: '2023-05-05', dispatch: 'Tripati' },
        { id: 10, productName: 'Premium Dates (1kg)', quantity: 35, orderDate: '2023-05-12', dispatch: 'Theni' },
        { id: 11, productName: 'Premium Dates (1kg)', quantity: 55, orderDate: '2023-05-18', dispatch: 'Madurai' },
      ],
      inventory: [
        { id: 8, productName: 'Premium Dates (1kg)', totalCount: 210, batch: 'B-2023-06', status: 'Dispatched' },
        { id: 9, productName: 'Premium Dates (1kg)', totalCount: 45, batch: 'B-2023-05', status: 'Processing' },
        { id: 10, productName: 'Premium Dates (1kg)', totalCount: 180, batch: 'B-2023-07', status: 'Dispatched' },
        { id: 11, productName: 'Premium Dates (1kg)', totalCount: 0, batch: 'B-2023-08', status: 'Pending' },
        { id: 12, productName: 'Premium Dates (1kg)', totalCount: 95, batch: 'B-2023-09', status: 'Processing' },
      ]
    },
    3: {
      name: 'Almonds in Honey (250ml)',
      image: almondsImage,
      orders: [
        { id: 1, productName: 'Almonds in Honey(250g)', quantity: 50, orderDate: '2023-05-01', dispatch: 'Chennai' },
        { id: 2, productName: 'Almonds in Honey (250g)', quantity: 30, orderDate: '2023-05-02', dispatch: 'Kanchipuram' },
        { id: 3, productName: 'Almonds in Honey (250ml)', quantity: 75, orderDate: '2023-05-03', dispatch: 'Madurai' },
        { id: 4, productName: 'Almonds in Honey (250g)', quantity: 42, orderDate: '2023-05-04', dispatch: 'Bengaluru' },
        { id: 5, productName: 'Almonds in Mango (250g)', quantity: 68, orderDate: '2023-05-05', dispatch: 'Theni' },
      ],
      inventory: [
        { id: 13, productName: 'Almonds in Honey (250g)', totalCount: 0, batch: 'B-2023-03', status: 'Pending' },
        { id: 14, productName: 'Almonds in Honey (250g)', totalCount: 75, batch: 'B-2023-08', status: 'Dispatched' },
        { id: 15, productName: 'Almonds in Honey (250g)', totalCount: 30, batch: 'B-2023-09', status: 'Processing' },
        { id: 16, productName: 'Almonds in Honey (250g)', totalCount: 50, batch: 'B-2023-10', status: 'Dispatched' },
      ]
    },
    4: {
      name: 'Date Syrup Cashew (250g)',
      image: nutsImage,
      orders: [
        { id: 1, productName: 'Date Syrup Cashew(250g)', quantity: 50, orderDate: '2023-05-01', dispatch: 'Chennai' },
        { id: 2, productName: 'Date Syrup Cashew (250g)', quantity: 30, orderDate: '2023-05-02', dispatch: 'Kanchipuram' },
        { id: 3, productName: 'Date Syrup Cashew (250ml)', quantity: 75, orderDate: '2023-05-03', dispatch: 'Madurai' },
        { id: 4, productName: 'Date Syrup Cashew (250g)', quantity: 42, orderDate: '2023-05-04', dispatch: 'Bengaluru' },
        { id: 5, productName: 'Date Syrup Cashew(250g)', quantity: 68, orderDate: '2023-05-05', dispatch: 'Theni' },
      ],
      inventory: [
        { id: 13, productName: 'Date Syrup Cashew (250ml)', totalCount: 0, batch: 'B-2023-03', status: 'Pending' },
        { id: 14, productName: 'Date Syrup Cashew (250ml)', totalCount: 75, batch: 'B-2023-08', status: 'Dispatched' },
        { id: 15, productName: 'Date Syrup Cashew (250ml)', totalCount: 30, batch: 'B-2023-09', status: 'Processing' },
        { id: 16, productName: 'Date Syrup Cashew(250ml)', totalCount: 50, batch: 'B-2023-10', status: 'Dispatched' },
      ]
    },
    5: {
      name: 'Amla in Honey (250ml)',
      image: honeyImage,
      orders: [
        { id: 1, productName: 'Amla in Honey(500g)', quantity: 50, orderDate: '2023-05-01', dispatch: 'Chennai' },
        { id: 2, productName: 'Amla in Honey (250g)', quantity: 30, orderDate: '2023-05-02', dispatch: 'Kanchipuram' },
        { id: 3, productName: 'Amla in Honey (250ml)', quantity: 75, orderDate: '2023-05-03', dispatch: 'Madurai' },
        { id: 4, productName: 'Amla in Honey (250g)', quantity: 42, orderDate: '2023-05-04', dispatch: 'Bengaluru' },
        { id: 5, productName: 'Amla in Mango (250g)', quantity: 68, orderDate: '2023-05-05', dispatch: 'Theni' },
      ],
      inventory: [
        { id: 13, productName: 'Amla in Honey (250ml)', totalCount: 0, batch: 'B-2023-03', status: 'Pending' },
        { id: 14, productName: 'Amla in Honey (250ml)', totalCount: 75, batch: 'B-2023-08', status: 'Dispatched' },
        { id: 15, productName: 'Amla in Honey (250ml)', totalCount: 30, batch: 'B-2023-09', status: 'Processing' },
        { id: 16, productName: 'Amla in Honey (250ml)', totalCount: 50, batch: 'B-2023-10', status: 'Dispatched' },
      ]
    },
    6: {
      name: 'Medjool Dates (250g)',
      image: medjoolImage,
      orders: [
        { id: 1, productName: 'Medjool Dates(250g)', quantity: 50, orderDate: '2023-05-01', dispatch: 'Chennai' },
        { id: 2, productName: 'Medjool Dates(250g)', quantity: 30, orderDate: '2023-05-02', dispatch: 'Kanchipuram' },
        { id: 3, productName: 'Medjool Dates (250g)', quantity: 75, orderDate: '2023-05-03', dispatch: 'Madurai' },
        { id: 4, productName: 'Medjool Dates(250g)', quantity: 42, orderDate: '2023-05-04', dispatch: 'Bengaluru' },
        { id: 5, productName: 'Medjool Dates (250g)', quantity: 68, orderDate: '2023-05-05', dispatch: 'Theni' },
      ],
      inventory: [
        { id: 13, productName: 'Medjool Dates (250g)', totalCount: 0, batch: 'B-2023-03', status: 'Pending' },
        { id: 14, productName: 'Medjool Dates(250g)', totalCount: 75, batch: 'B-2023-08', status: 'Dispatched' },
        { id: 15, productName: 'Medjool Dates(250g)', totalCount: 30, batch: 'B-2023-09', status: 'Processing' },
        { id: 16, productName: 'Medjool Dates(250g)', totalCount: 50, batch: 'B-2023-10', status: 'Dispatched' },
      ]
    },
    7: {
      name: 'Date Nut Bars (250g)',
      image: datebarsImage,
      orders: [
        { id: 1, productName: 'Date Nut Bars (250g)', quantity: 50, orderDate: '2023-05-01', dispatch: 'Chennai' },
        { id: 2, productName: 'Date Nut Bars (250g)', quantity: 30, orderDate: '2023-05-02', dispatch: 'Kanchipuram' },
        { id: 3, productName: 'Date Nut Bars (250g)', quantity: 75, orderDate: '2023-05-03', dispatch: 'Madurai' },
        { id: 4, productName: 'Date Nut Bars (250g)', quantity: 42, orderDate: '2023-05-04', dispatch: 'Bengaluru' },
        { id: 5, productName: 'Date Nut Bars (250g)', quantity: 68, orderDate: '2023-05-05', dispatch: 'Theni' },
      ],
      inventory: [
        { id: 13, productName: 'Date Nut Bars (250g)', totalCount: 0, batch: 'B-2023-03', status: 'Pending' },
        { id: 14, productName: 'Date Nut Bars (250g)', totalCount: 75, batch: 'B-2023-08', status: 'Dispatched' },
        { id: 15, productName: 'Date Nut Bars (250g)', totalCount: 30, batch: 'B-2023-09', status: 'Processing' },
        { id: 16, productName: 'Date Nut Bars (250g)', totalCount: 50, batch: 'B-2023-10', status: 'Dispatched' },
      ]
    },
    8: {
      name: 'Honey Cashew (250g)',
      image: nutImage,
      orders: [
        { id: 1, productName: 'Honey Cashew (250g)', quantity: 50, orderDate: '2023-05-01', dispatch: 'Chennai' },
        { id: 2, productName: 'Honey Cashew (250g)', quantity: 30, orderDate: '2023-05-02', dispatch: 'Kanchipuram' },
        { id: 3, productName: 'Honey Cashew (250g)', quantity: 75, orderDate: '2023-05-03', dispatch: 'Madurai' },
        { id: 4, productName: 'Honey Cashew (250g)', quantity: 42, orderDate: '2023-05-04', dispatch: 'Bengaluru' },
        { id: 5, productName: 'Honey Cashew (250g)', quantity: 68, orderDate: '2023-05-05', dispatch: 'Theni' },
      ],
      inventory: [
        { id: 13, productName: 'Honey Cashew (250g)', totalCount: 0, batch: 'B-2023-03', status: 'Pending' },
        { id: 14, productName: 'Honey Cashew (250g)', totalCount: 75, batch: 'B-2023-08', status: 'Dispatched' },
        { id: 15, productName: 'Honey Cashew (250g)', totalCount: 30, batch: 'B-2023-09', status: 'Processing' },
        { id: 16, productName: 'Honey Cashew (250g)', totalCount: 50, batch: 'B-2023-10', status: 'Dispatched' },
      ]
    },
  };

  const product = productData[id] || productData[1];

  const commonColumnProps = {
    headerAlign: 'center',
    align: 'center',
    cellClassName: 'centered-cell',
    headerClassName: 'centered-header'
  };

  const orderColumns = [
    { 
      field: 'id', 
      headerName: 'ORDER ID', 
      width: 150,
      ...commonColumnProps
    },
    { 
      field: 'productName', 
      headerName: 'PRODUCT NAME', 
      width: 300,
      ...commonColumnProps
    },
    { 
      field: 'quantity', 
      headerName: 'QUANTITY', 
      width: 150,
      ...commonColumnProps
    },
    { 
      field: 'orderDate', 
      headerName: 'ORDER DATE', 
      width: 200,
      ...commonColumnProps
    },
    {
      field: 'dispatch',
      headerName: 'DISPATCH LOCATION',
      width: 200,
      ...commonColumnProps,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color="primary"
          variant="outlined"
          sx={{ 
            width: '90%', 
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '0.9rem'
          }}
        />
      )
    },
  ];

  const inventoryColumns = [
    { 
      field: 'id', 
      headerName: 'ITEM ID', 
      width: 150,
      ...commonColumnProps
    },
    { 
      field: 'productName', 
      headerName: 'PRODUCT NAME', 
      width: 300,
      ...commonColumnProps
    },
    { 
      field: 'totalCount', 
      headerName: 'IN STOCK', 
      width: 150,
      ...commonColumnProps,
      renderCell: (params) => (
        <Typography 
          fontWeight={params.value === 0 ? 600 : 700} 
          color={params.value === 0 ? 'error' : 'inherit'}
        >
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'batch', 
      headerName: 'BATCH NUMBER', 
      width: 200,
      ...commonColumnProps
    },
    {
      field: 'status',
      headerName: 'STATUS',
      width: 200,
      ...commonColumnProps,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === 'Dispatched' ? 'success' : 
            params.value === 'Processing' ? 'warning' : 'default'
          }
          sx={{ 
            width: '90%', 
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '0.9rem'
          }}
        />
      )
    },
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#f8fafc',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header title={`Product Details - ${product.name}`} />
      
      <Container maxWidth="xl" sx={{ py: 3, flex: 1 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/warehouse')}
          sx={{ 
            mb: 3,
            backgroundColor: '#1e40af',
            color: 'white',
            '&:hover': {
              backgroundColor: '#1e3a8a'
            }
          }}
        >
          BACK TO PRODUCTS
        </Button>

        {/* Product Header */}
        <Paper sx={{ 
          p: 4, 
          mb: 4, 
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={product.image}
              alt={product.name}
              sx={{ 
                width: 140, 
                height: 140, 
                mr: 4,
                borderRadius: '12px'
              }}
              variant="rounded"
            />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#1e40af' }}>
                {product.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, fontSize: '1.1rem' }}>
                {product.description}
              </Typography>
              <Box sx={{ display: 'flex', mt: 3, gap: 2 }}>
                <Chip 
                  label={`${product.orders.length} Orders`} 
                  color="primary" 
                  variant="outlined"
                  sx={{ fontSize: '0.9rem', padding: '8px 12px', fontWeight: 600 }}
                />
                <Chip 
                  label={`${product.inventory.length} Inventory Items`} 
                  color="primary" 
                  variant="outlined"
                  sx={{ fontSize: '0.9rem', padding: '8px 12px', fontWeight: 600 }}
                />
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Orders Table */}
        <Paper sx={{ 
          p: 3, 
          mb: 4,
          height: '100%',
          minHeight: 500,
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            mb: 2, 
            color: '#1e40af',
            textAlign: 'center',
            fontSize: '1.4rem'
          }}>
            RECENT ORDERS
          </Typography>
          <Divider sx={{ my: 2, borderColor: 'rgba(0, 0, 0, 0.12)' }} />
          <Box sx={{ 
            flex: 1, 
            width: '100%',
            '& .MuiDataGrid-root': {
              border: 'none',
              fontSize: '0.95rem'
            }
          }}>
            <DataGrid
              rows={product.orders}
              columns={orderColumns}
              pageSize={7}
              rowsPerPageOptions={[7]}
              disableColumnMenu
              sx={{
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
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1e40af'
                },
                '& .MuiDataGrid-row': {
                  '&:hover': { backgroundColor: 'rgba(30, 64, 175, 0.04)' }
                },
                '& .MuiDataGrid-footerContainer': {
                  borderTop: 'none',
                  justifyContent: 'center'
                }
              }}
            />
          </Box>
        </Paper>

        {/* Inventory Table */}
        <Paper sx={{ 
          p: 3, 
          height: '100%',
          minHeight: 500,
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            mb: 2, 
            color: '#1e40af',
            textAlign: 'center',
            fontSize: '1.4rem'
          }}>
            INVENTORY STATUS
          </Typography>
          <Divider sx={{ my: 2, borderColor: 'rgba(0, 0, 0, 0.12)' }} />
          <Box sx={{ 
            flex: 1, 
            width: '100%',
            '& .MuiDataGrid-root': {
              border: 'none',
              fontSize: '0.95rem'
            }
          }}>
            <DataGrid
              rows={product.inventory}
              columns={inventoryColumns}
              pageSize={7}
              rowsPerPageOptions={[7]}
              disableColumnMenu
              sx={{
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
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1e40af'
                },
                '& .MuiDataGrid-row': {
                  '&:hover': { backgroundColor: 'rgba(30, 64, 175, 0.04)' }
                },
                '& .MuiDataGrid-footerContainer': {
                  borderTop: 'none',
                  justifyContent: 'center'
                }
              }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProductDetails;