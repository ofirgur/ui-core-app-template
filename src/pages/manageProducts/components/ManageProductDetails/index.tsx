import React from 'react';
import { useParams } from 'react-router-dom';

const ManageProductDetails = () => {
  const { productId } = useParams();

  return <div>Product ID: {productId}</div>;
};

export default ManageProductDetails;
