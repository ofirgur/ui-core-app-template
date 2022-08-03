import React, { useEffect } from 'react';
import { createAPIAction } from 'utils/api';

const Garments = () => {
  useEffect(() => {
    createAPIAction({
      url: 'users',
    }).then((response) => {
      console.log(response);
    });
  }, []);

  return <div>Garments</div>;
};

export default Garments;
