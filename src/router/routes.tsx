const routes = {
  home: {
    path: '/',
    pathname: '/',
    title: 'Home',
  },
  manageproducts: {
    path: 'manageproducts',
    pathname: '/manageproducts',
    title: 'Manage Products',
  },
  productdetails: {
    path: 'productdetails',
    pathname: '/manageproducts/productdetails',
    title: 'Product Details',
  },
  createajob: {
    path: 'createajob',
    pathname: '/createajob',
    title: 'Create a Job',
  },
  manageavatars: {
    path: 'manageavatars',
    pathname: '/manageavatars',
    title: 'Manage Avatars',
  },
  managegarments: {
    path: 'managegarments',
    pathname: '/managegarments',
    title: 'Manage Garments',
  },
  status: {
    path: 'status',
    pathname: '/status',
    title: 'Status',
  },
  notfound: {
    path: '*',
    pathname: '*',
    title: 'Not Found',
  },
};

export default routes;

export const findRoute = (pathname: string) => {
  return Object.values(routes).find((r) => r.pathname === pathname);
};
