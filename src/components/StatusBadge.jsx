import React from 'react';
import { Badge, Tooltip } from '@mui/material';
import { 
  CheckCircle as SuccessIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon
} from '@mui/icons-material';

const statusColors = {
  completed: { icon: <SuccessIcon color="success" />, label: 'Completed' },
  pending: { icon: <WarningIcon color="warning" />, label: 'Pending' },
  error: { icon: <ErrorIcon color="error" />, label: 'Error' },
  info: { icon: <InfoIcon color="info" />, label: 'Info' },
};

const StatusBadge = ({ status, count = 0 }) => {
  const statusConfig = statusColors[status] || statusColors.info;

  return (
    <Tooltip title={statusConfig.label}>
      <Badge
        badgeContent={count}
        color="default"
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        {statusConfig.icon}
      </Badge>
    </Tooltip>
  );
};

export default StatusBadge;