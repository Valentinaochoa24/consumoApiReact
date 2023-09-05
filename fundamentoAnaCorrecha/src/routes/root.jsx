import React from 'react'
import App from '/laragon/www/umanizales/nodejs/fundamentoAnaCorrecha/src/App'
import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";

import Welcome from '../pages/Welcome';
import Character from '../pages/Character';
import ErrorPage from '../error-page';
import Navbar from '../components/Navbar';

const NavWrapper = () => (
 <div>
  <Navbar/>
 </div>
);

const router = createBrowserRouter([
  {
    path: "/", 
    element: <NavWrapper />,
    eerorElement: <ErrorPage/>,
    children: [
      {
        path: "/", 
        element: <App />,
      },
      {
        path: "welcome", 
        element: <Welcome />,
      },
      {
        path: "character/:characterId",
        element: <Character />,
      },

    ]
  },
  
]);

export default router;