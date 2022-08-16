import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const TableSkeleton = () => {
  return (
    <Box>
      <Skeleton animation="wave" height={80} />
      <Skeleton animation="wave" height={60} />
      <Skeleton animation="wave" height={60} />
      <Skeleton animation="wave" height={60} />
    </Box>
  );
};

export default TableSkeleton;
