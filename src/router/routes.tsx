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
  if (pathname === routes.home.pathname) return routes.home;
  return Object.values(routes)
    .filter((r) => r.pathname !== routes.home.pathname)
    .find((r) => pathname.includes(r.pathname));
};
