import React, { useState, useEffect } from 'react';
import Skeleton from 'components/Skeleton';
import { getProductsAPI } from '../../api';
import { useManageProductsContext } from '../../state/context';
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

  if (ready) return <Skeleton type="cards" />;

  return <ManageProductTable products={products} />;
};

export default ManageProductsIndex;
