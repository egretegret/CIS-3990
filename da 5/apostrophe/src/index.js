import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Collection from './Collection';
import Collections from './Collections';
import Create from './Create';
import Home from './Home';
import HomePoem from './HomePoem';
import Search from './Search';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <Error />,
  },
  {
    path: "/poem/:poemId",
    element: <HomePoem />
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "create",
    element: <Create />,
  },
  {
    path: "collections",
    element: <Collections />,
  },
  {
    path: "collections/:collectionId",
    element: <Collection />,
  },
  // {
  //   path: "profile",
  //   element: <Profile />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
