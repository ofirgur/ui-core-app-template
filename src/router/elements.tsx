import React, { Suspense } from 'react';

export const getSuspendedComponent = (
  factoty: () => Promise<{
    default: React.ComponentType<unknown>;
  }>
) => {
  const Component = React.lazy(factoty);
  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};

export const getAppElement = () => {
  return getSuspendedComponent(
    () => import(/* webpackChunkName: "app-element" */ 'components/App')
  );
};

export const getManageProductsElement = () => {
  return getSuspendedComponent(
    () =>
      import(
        /* webpackChunkName: "manage-product-element" */ 'pages/manageProducts'
      )
  );
};

export const getCreateAJobElement = () => {
  return getSuspendedComponent(
    () =>
      import(/* webpackChunkName: "create-a-job-element" */ 'pages/createAJob')
  );
};

export const getManageAvatarsElement = () => {
  return getSuspendedComponent(
    () =>
      import(
        /* webpackChunkName: "manage-avatars-element" */ 'pages/manageAvatars'
      )
  );
};

export const getManageGarmentsElement = () => {
  return getSuspendedComponent(
    () =>
      import(
        /* webpackChunkName: "manage-garments-element" */ 'pages/manageGarments'
      )
  );
};

export const getStatusElement = () => {
  return getSuspendedComponent(
    () => import(/* webpackChunkName: "status-element" */ 'pages/status')
  );
};

export const getNotFoundElement = () => {
  return getSuspendedComponent(
    () => import(/* webpackChunkName: "not-found-element" */ 'pages/notFound')
  );
};
