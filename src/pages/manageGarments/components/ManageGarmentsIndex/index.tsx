import React from 'react';
import { useManageGarmentsContext } from '../../utils/state/context';
import ManageProductTable from '../ManageGarmentTable';

const ManageProductsIndex = () => {
  const { manageGarmentsState } = useManageGarmentsContext();
  const { products } = manageGarmentsState;

  return <ManageProductTable products={products} />;
};

export default ManageProductsIndex;
