import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Search from './src/components/Search';
import Home from './src/components/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
              path: '/search',
              element: <Search />
          }
        ]
    },
])

root.render(
  <React.StrictMode>
    <RouterProvider router = {appRouter} />
  </React.StrictMode>
);