import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const ManageProductsSkeleton = () => {
  return (
    <Box>
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
      <Skeleton animation="wave" height={35} />
    </Box>
  );
};

export default ManageProductsSkeleton;
