import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../utils/types';
import { useManageGarmentsContext } from '../../utils/state/context';
import { StyledProductTitle } from './styled';

const ManageGarmentDetails = () => {
  const { productId } = useParams();
  const { manageGarmentsState } = useManageGarmentsContext();
  const { products } = manageGarmentsState;
  const product = products.find((p: Product) => p.id === productId);

  return (
    <>
      <StyledProductTitle>Product - {product.name}</StyledProductTitle>
    </>
  );
};

export default ManageGarmentDetails;
