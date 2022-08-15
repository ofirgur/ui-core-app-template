import routes from 'router/routes';
import STRINGS from '../strings';

export const productPath = ':productId';

export const getProductPath = (productId: string) => {
    return `${routes.manageproducts.path}/${productId}`;
};

export const manageProductsColumns = [
  STRINGS.ProductName,
  STRINGS.Sizes,
  STRINGS.LastRun,
  STRINGS.LastSync,
  STRINGS.SKU,
  STRINGS.Description,
  STRINGS.Actions,
];