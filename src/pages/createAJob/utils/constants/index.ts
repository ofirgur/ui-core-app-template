import routes from 'router/routes';
import STRINGS from '../strings';

export const productPath = ':productId';

export const getProductPath = (productId: string) => {
    return `${routes.createajob.path}/${productId}`;
};

export const createAJobColumns = [
  STRINGS.ProductName,
  STRINGS.Sizes,
  STRINGS.LastRun,
  STRINGS.LastSync,
  STRINGS.SKU,
  STRINGS.Description,
  STRINGS.Actions,
];