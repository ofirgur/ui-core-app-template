import React, { useEffect } from 'react';
import { createAPIAction } from 'utils/api';

const Garments = () => {
  useEffect(() => {
    createAPIAction();
  }, []);

  return <div>Garments</div>;
};

export default Garments;
