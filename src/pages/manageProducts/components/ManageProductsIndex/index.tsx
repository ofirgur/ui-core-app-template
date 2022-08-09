import React, { useState, useEffect } from 'react';
import { getProductsAPI } from 'pages/manageProducts/api';
import { useManageProductsContext } from 'pages/manageProducts/state/context';

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

  if (!ready) return <div>Fetching...</div>;

  return <div>{products}</div>;
};

export default ManageProductsIndex;
