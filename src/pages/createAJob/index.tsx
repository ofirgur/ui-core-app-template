import React, { useEffect } from 'react';
import { createAPIAction } from 'utils/api';

const CreateAJob = () => {
  useEffect(() => {
    createAPIAction({
      url: 'users',
    }).then((response) => {
      console.log(response);
    });
  }, []);

  return <div>CreateAJob</div>;
};

export default CreateAJob;
