import React from 'react';
import { useCreateAJobContext } from '../../utils/state/context';
import CreateAJobStateTable from '../CreateAJobStateTable';

const ManageProductsIndex = () => {
  const { createAJobState } = useCreateAJobContext();
  const { products } = createAJobState;

  return <CreateAJobStateTable products={products} />;
};

export default ManageProductsIndex;
