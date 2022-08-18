import React from 'react';
import { useManageProductsContext } from '../../utils/state/context';
import ManageProductTable from '../ManageProductTable';

const ManageProductsIndex = () => {
  const { manageProductsState } = useManageProductsContext();
  const { products } = manageProductsState;

  return <ManageProductTable products={products} />;
};

export default ManageProductsIndex;
