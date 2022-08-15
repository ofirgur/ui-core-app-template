import React from 'react';
import { manageProductsColumns as columns } from '../../constants';
import { Product } from '../../types';
import SimpleTable from 'components/SimpleTable';

type ManageProductTableProps = {
  products: Product[];
};

export const ManageProductTable = (props: ManageProductTableProps) => {
  const { products } = props;
  return (
    <SimpleTable
      columns={columns}
      rows={products.map((p) => ({
        name: p.name,
        sizes: p.sizes,
        lastRun: p.lastRun,
        lastSync: p.lastSync,
        sku: p.sku,
        description: p.description,
      }))}
    />
  );
};

export default ManageProductTable;
