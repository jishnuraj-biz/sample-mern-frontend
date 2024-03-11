import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';

const Router = () => {
  const router = useMemo(
    () => createBrowserRouter([{ path: '/', element: <HomePage /> }]),
    []
  );
  return <RouterProvider router={router} />;
};

export default Router;
