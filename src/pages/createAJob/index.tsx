import React from 'react';
import { CREATE_A_JOB_INITIAL_STATE } from './utils/state/initial';
import { ManageProductsContextProvider } from './utils/state/context';
import ManageProductsOutlet from './components/ManageProductsOutlet';

const CreateAJob = () => {
  return (
    <ManageProductsContextProvider initialState={CREATE_A_JOB_INITIAL_STATE}>
      <ManageProductsOutlet />
    </ManageProductsContextProvider>
  );
};

export default CreateAJob;
