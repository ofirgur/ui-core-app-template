import React from 'react';
import { CREATE_A_JOB_INITIAL_STATE } from './utils/state/initial';
import { CreateAJobContextProvider } from './utils/state/context';
import CreateAJobOutlet from './components/CreateAJobOutlet';

const CreateAJob = () => {
  return (
    <CreateAJobContextProvider initialState={CREATE_A_JOB_INITIAL_STATE}>
      <CreateAJobOutlet />
    </CreateAJobContextProvider>
  );
};

export default CreateAJob;
