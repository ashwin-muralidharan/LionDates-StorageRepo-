import React from 'react';
import { Chip } from '@mui/material';

const statusColors = {
  active: { bgcolor: '#e6f6e6', color: '#1b5e20' },
  pending: { bgcolor: '#fff8e1', color: '#ff8f00' },
  completed: { bgcolor: '#e3f2fd', color: '#1565c0' },
  cancelled: { bgcolor: '#ffebee', color: '#c62828' },
  default: { bgcolor: '#f5f5f5', color: '#424242' }
};

const StatusPill = ({ status, label }) => {
  const colorConfig = statusColors[status.toLowerCase()] || statusColors.default;

  return (
    <Chip
      label={label || status}
      size="small"
      sx={{
        backgroundColor: colorConfig.bgcolor,
        color: colorConfig.color,
        fontWeight: 500,
        textTransform: 'capitalize',
        minWidth: 80
      }}
    />
  );
};

export default StatusPill;