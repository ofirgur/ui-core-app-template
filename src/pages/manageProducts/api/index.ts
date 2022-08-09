import { createAPIAction } from "utils/api";

export const getProductsAPI = () => createAPIAction({
    url: 'users',
  },
  {
    mockDelay: 2000, 
    mockResponse: { 
      status: 200,
      data: 'kkkkkk'
    }
  }
);