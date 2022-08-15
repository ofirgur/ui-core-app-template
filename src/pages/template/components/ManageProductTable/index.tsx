import React from 'react';
import SimpleTable from 'components/SimpleTable';
import { manageProductsColumns as columns } from '../../utils/constants';
import { Product } from '../../utils/types';
import ActionsColumn from './components/ActionsColumn';

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
        actions: <ActionsColumn productId={p.id} />,
      }))}
    />
  );
};

export default ManageProductTable;
