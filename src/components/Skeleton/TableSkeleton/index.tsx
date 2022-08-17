import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const TableSkeleton = () => {
  return (
    <Box>
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={50} />
      <Skeleton animation="wave" height={50} />
      <Skeleton animation="wave" height={50} />
    </Box>
  );
};

export default TableSkeleton;
