import React from 'react';
import SimpleTable from 'components/SimpleTable';
import { createAJobColumns as columns } from '../../utils/constants';
import { Product } from '../../utils/types';
import ActionsColumn from './components/ActionsColumn';

type CreateAJobStateTableProps = {
  products: Product[];
};

export const CreateAJobStateTable = (props: CreateAJobStateTableProps) => {
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

export default CreateAJobStateTable;
