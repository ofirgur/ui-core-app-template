import React, { useState, useEffect } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Skeleton from 'components/Skeleton';
import { getProductsAPI } from '../../utils/api';
import { useManageGarmentsContext } from '../../utils/state/context';
import ManageGarmentsIndex from '../ManageGarmentsIndex';
import ManageGarmentsDetails from '../ManageGarmentDetails';

const ManageGarmentsOutlet = () => {
  const [ready, setReady] = useState(false);
  const { setManageGarmentsState } = useManageGarmentsContext();

  useEffect(() => {
    const setProducts = () => {
      getProductsAPI().then((response) => {
        setManageGarmentsState({
          products: response.data,
        });
        setReady(true);
      });
    };

    setProducts();
  }, []);

  if (!ready) return <Skeleton type="cards" />;

  return (
    <React.Fragment>
      <Routes>
        <Route index element={<ManageGarmentsIndex />} />
        <Route path=":productId" element={<ManageGarmentsDetails />} />
      </Routes>

      <Outlet />
    </React.Fragment>
  );
};

export default ManageGarmentsOutlet;
