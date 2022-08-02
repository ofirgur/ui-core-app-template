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

export const getDashboardElement = () => {
  const Component = React.lazy(
    () => import(/* webpackChunkName: "dashboard-element" */ 'pages/dashboard')
  );

  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};

export const getGarmentsElement = () => {
  const Component = React.lazy(
    () => import(/* webpackChunkName: "garments-element" */ 'pages/garments')
  );

  return (
    <Suspense fallback={<>...</>}>
      <Component />
    </Suspense>
  );
};

export const getCollectionsElement = () => {
  const Component = React.lazy(
    () =>
      import(/* webpackChunkName: "collections-element" */ 'pages/collections')
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
