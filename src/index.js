import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Routes 
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Contact from "./routes/contact";
import AboutMe from "./routes/about-me";
import Projects from "./routes/projects";
import Circles from "./routes/circles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [ 
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/circles",
        element: <Circles />,
      }
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
 
);
