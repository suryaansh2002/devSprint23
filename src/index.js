import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Timeline from './Pages/Timeline/Timeline';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <><Home />
        <About />
        <Timeline />
      </>
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/timeline",
      element: <Timeline />
    }

  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


