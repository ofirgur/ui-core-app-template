import routes from 'router/routes';

export const productPath = ':productId';

export const getProductPath = (productId: string) => {
    return `${routes.manageproducts.path}/${productId}`;
};