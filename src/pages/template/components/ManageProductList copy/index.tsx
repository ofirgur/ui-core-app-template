import React from 'react';
import { ProductList } from '../../utils/types';

type ManageProductListProps = {
  products: ProductList;
};

const ManageProductList = (props: ManageProductListProps) => {
  const { products } = props;
  console.log('products: ', products);
  return <div>ManageProductList</div>;
};

export default ManageProductList;
