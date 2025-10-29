import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
import './index.css';

// 3. Define the application's routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The App component is the layout
    children: [
      {
        index: true, // This makes Home the default child route for "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);