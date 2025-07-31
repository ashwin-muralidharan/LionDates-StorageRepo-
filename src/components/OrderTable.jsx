import React from 'react';
import { 
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector
} from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ p: 1, borderBottom: '1px solid #e0e0e0' }}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const OrderTable = ({ orders, onRowClick }) => {
  const columns = [
    { 
      field: 'id', 
      headerName: 'Order ID', 
      width: 100,
      renderCell: (params) => (
        <strong>#{params.value}</strong>
      )
    },
    { 
      field: 'productName', 
      headerName: 'Product', 
      width: 180,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            src={`/static/images/products/${params.value.toLowerCase().replace(' ', '-')}.jpg`}
            sx={{ width: 32, height: 32, mr: 2 }}
          />
          {params.value}
        </Box>
      )
    },
    { field: 'quantity', headerName: 'Quantity', width: 120 },
    { field: 'count', headerName: 'Count', width: 120 },
    { 
      field: 'orderDate', 
      headerName: 'Date', 
      width: 150,
      valueFormatter: (params) => new Date(params.value).toLocaleDateString()
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Button
          variant="outlined"
          size="small"
          startIcon={<PrintIcon />}
          onClick={(e) => {
            e.stopPropagation();
            alert(`Printing order #${params.row.id}`);
          }}
        >
          Print
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={orders}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        components={{
          Toolbar: CustomToolbar,
        }}
        onRowClick={onRowClick}
        sx={{
          '& .MuiDataGrid-cell:hover': {
            cursor: 'pointer',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
          },
        }}
      />
    </Box>
  );
};

export default OrderTable;