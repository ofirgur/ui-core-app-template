import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const ManageProductsSkeleton = () => {
  return (
    <Box>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default ManageProductsSkeleton;
