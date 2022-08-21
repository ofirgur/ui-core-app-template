import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../utils/types';
import { useManageProductsContext } from '../../utils/state/context';
import { StyledProductTitle } from './styled';

const ManageProductDetails = () => {
  const { productId } = useParams();
  const { manageProductsState } = useManageProductsContext();
  const { products } = manageProductsState;
  const product = products.find((p: Product) => p.id === productId);

  return (
    <>
      <StyledProductTitle>Product - {product.name}</StyledProductTitle>
    </>
  );
};

export default ManageProductDetails;
