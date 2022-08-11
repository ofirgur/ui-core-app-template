import { createAPIAction } from "utils/api";
import { getProductsMockConfig } from './mocks';

const requestConfig = {
  url: 'users',
};

export const getProductsAPI = () => createAPIAction(
  requestConfig,
  getProductsMockConfig
);