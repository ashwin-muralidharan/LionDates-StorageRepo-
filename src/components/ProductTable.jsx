import React, { useState } from 'react';
import { 
  DataGrid,
  GridActionsCellItem
} from '@mui/x-data-grid';
import { 
  Box,
  Chip,
  Avatar,
  Tooltip,
  IconButton
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InventoryIcon from '@mui/icons-material/Inventory';

const ProductTable = ({ products, onPrint, onSubmit }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelectionChange = (newSelection) => {
    setSelectedIds(newSelection);
  };

  const columns = [
    { 
      field: 'productName', 
      headerName: 'Product', 
      width: 250,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            src={`/static/images/products/${params.value.toLowerCase().replace(' ', '-')}.jpg`}
            sx={{ width: 40, height: 40, mr: 2 }}
          />
          <Box>
            <Typography variant="body1">{params.value}</Typography>
            <Typography variant="caption" color="text.secondary">
              SKU: {params.row.sku || 'N/A'}
            </Typography>
          </Box>
        </Box>
      )
    },
    { 
      field: 'totalCount', 
      headerName: 'Stock', 
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          icon={<InventoryIcon />}
          color={params.value > 50 ? 'success' : params.value > 10 ? 'warning' : 'error'}
          variant="outlined"
        />
      )
    },
    { 
      field: 'batch', 
      headerName: 'Batch', 
      width: 150 
    },
    { 
      field: 'lastUpdated', 
      headerName: 'Updated', 
      width: 150,
      valueFormatter: (params) => new Date(params.value).toLocaleDateString()
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          icon={
            <Tooltip title="Print Labels">
              <PrintIcon color="primary" />
            </Tooltip>
          }
          label="Print"
          onClick={() => onPrint(params.id, params.row.totalCount)}
        />,
        <GridActionsCellItem
          icon={
            <Tooltip title="Mark as Complete">
              <CheckCircleIcon color="success" />
            </Tooltip>
          }
          label="Complete"
          onClick={() => onSubmit(params.id)}
          showInMenu
        />,
      ],
    },
  ];

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        checkboxSelection
        onSelectionModelChange={handleSelectionChange}
        selectionModel={selectedIds}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
          },
        }}
      />
    </Box>
  );
};

export default ProductTable;