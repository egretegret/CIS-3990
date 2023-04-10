import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import About from './pages/About';
import Design from './pages/Design';
import Error from './pages/Error';
import Film from './pages/Film';
import Home from './pages/Home';
import Programming from './pages/Programming';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "design",
    element: <Design />,
  },
  {
    path: "film",
    element: <Film />,
  },
  {
    path: "programming",
    element: <Programming />,
  },
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
