import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const CardsSkeleton = () => {
  return (
    <Box display="inline-flex" gap="20px">
      {[1, 2, 3].map((b, i) => (
        <Box key={i} width="280px">
          <Skeleton variant="rectangular" height={118} />
          <Box>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CardsSkeleton;
