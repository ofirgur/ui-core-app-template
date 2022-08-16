import React, { useState, useEffect } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Skeleton from 'components/Skeleton';
import { getProductsAPI } from '../../utils/api';
import { useManageProductsContext } from '../../utils/state/context';
import ManageProductsIndex from '../ManageProductsIndex';
import ManageProductDetails from '../ManageProductDetails';

const ManageProductsOutlet = () => {
  const [ready, setReady] = useState(false);
  const { setManageProductsState } = useManageProductsContext();

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

  if (!ready) return <Skeleton type="table" />;

  return (
    <React.Fragment>
      <Routes>
        <Route index element={<ManageProductsIndex />} />
        <Route path=":productId" element={<ManageProductDetails />} />
      </Routes>

      <Outlet />
    </React.Fragment>
  );
};

export default ManageProductsOutlet;
