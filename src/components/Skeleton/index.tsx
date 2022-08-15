// @flow
import * as React from 'react';
import CardsSkeleton from './CardsSkeleton';
import TableSkeleton from './TableSkeleton';

type SkeletonProps = {
  type: 'table' | 'wizard' | 'cards' | undefined;
};

export const Skeleton = (props: SkeletonProps) => {
  const { type } = props;
  const getSkeletonByType = () => {
    switch (type) {
      case 'table':
        return <TableSkeleton />;
      case 'cards':
      default:
        return <CardsSkeleton />;
    }
  };

  return getSkeletonByType();
};

export default Skeleton;
