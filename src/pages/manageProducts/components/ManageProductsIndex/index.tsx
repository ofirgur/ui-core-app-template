import React, { useState, useEffect } from 'react';
import { getProductsAPI } from 'pages/manageProducts/api';
import { useManageProductsContext } from 'pages/manageProducts/state/context';
import ManageProductsSkeleton from '../ManageProductsSkeleton';
import ManageProductTable from '../ManageProductTable';

const ManageProductsIndex = () => {
  const [ready, setReady] = useState(false);
  const { manageProductsState, setManageProductsState } =
    useManageProductsContext();
  const { products } = manageProductsState;

  useEffect(() => {
    const setProducts = () => {
      getProductsAPI().then((response) => {
        setManageProductsState({
          products: response.data,
        });
        setReady(true);
      });
    };

    setProducts();
  }, []);

  if (!ready) return <ManageProductsSkeleton />;

  return <ManageProductTable products={products} />;
};

export default ManageProductsIndex;
