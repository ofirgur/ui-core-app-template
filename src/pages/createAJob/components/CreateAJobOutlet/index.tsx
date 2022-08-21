import React, { useState, useEffect } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Skeleton from 'components/Skeleton';
import { getProductsAPI } from '../../utils/api';
import { useCreateAJobContext } from '../../utils/state/context';
import ManageProductsIndex from '../CreateAJobIndex';
import ManageProductDetails from '../CreateAJobDetails';

const CreateAJobOutlet = () => {
  const [ready, setReady] = useState(false);
  const { setCreateAJobState } = useCreateAJobContext();

  useEffect(() => {
    const setProducts = () => {
      getProductsAPI().then((response) => {
        setCreateAJobState({
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
        <Route index element={<ManageProductsIndex />} />
        <Route path=":productId" element={<ManageProductDetails />} />
      </Routes>

      <Outlet />
    </React.Fragment>
  );
};

export default CreateAJobOutlet;
