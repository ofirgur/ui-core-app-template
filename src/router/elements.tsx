import React, { Suspense } from 'react';

export const getAppElement = () => {
  const Component = React.lazy(
    () => import(/* webpackChunkName: "app-element" */ 'components/App')
  );

  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};

export const getManageProductsElement = () => {
  const Component = React.lazy(
    () =>
      import(
        /* webpackChunkName: "manage-product-element" */ 'pages/manageProducts'
      )
  );

  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};

export const getCreateAJobElement = () => {
  const Component = React.lazy(
    () =>
      import(/* webpackChunkName: "create-a-job-element" */ 'pages/createAJob')
  );

  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};

export const getManageAvatarsElement = () => {
  const Component = React.lazy(
    () =>
      import(
        /* webpackChunkName: "manage-avatars-element" */ 'pages/manageAvatars'
      )
  );

  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};

export const getManageGarmentsElement = () => {
  const Component = React.lazy(
    () =>
      import(
        /* webpackChunkName: "manage-garments-element" */ 'pages/manageGarments'
      )
  );

  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};

export const getStatusElement = () => {
  const Component = React.lazy(
    () => import(/* webpackChunkName: "status-element" */ 'pages/status')
  );

  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};

export const getNotFoundElement = () => {
  const Component = React.lazy(
    () => import(/* webpackChunkName: "not-found-element" */ 'pages/notFound')
  );

  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};
