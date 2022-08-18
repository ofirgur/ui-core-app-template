import React from 'react';
import { MANAGE_GARMENTS_INITIAL_STATE } from './utils/state/initial';
import { ManageGarmentsContextProvider } from './utils/state/context';
import ManageGarmentsOutlet from './components/ManageGarmentsOutlet';

const ManageGarments = () => {
  return (
    <ManageGarmentsContextProvider initialState={MANAGE_GARMENTS_INITIAL_STATE}>
      <ManageGarmentsOutlet />
    </ManageGarmentsContextProvider>
  );
};

export default ManageGarments;
