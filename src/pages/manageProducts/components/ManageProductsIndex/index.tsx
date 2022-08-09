import React, { useEffect } from 'react';
import { useManageProductsContext } from 'pages/manageProducts/state/context';

const ManageProductsIndex = () => {
  const { manageProductsState, setManageProductsState } =
    useManageProductsContext();
  console.log('manageProductsState:', manageProductsState);

  useEffect(() => {
    setManageProductsState({
      products: [1, 2, 3],
    });
  }, []);

  return <div>ManageProductsIndex</div>;
};

export default ManageProductsIndex;
