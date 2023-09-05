import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Welcome from './pages/Welcome';
import ErrorPage from './error-page.jsx';
import CharacterDetails from './CharacterDetails';
import ContactSection from './pages/Contacto.jsx';
const Header = () => (
  <header className="bg-blue-500 p-4">
    <nav className="container mx-auto flex items-center justify-between">
      <div className="text-white font-semibold text-lg">
        <a href="/">Mi Sitio</a>
      </div>
      {/* Opciones de navegación */}
    </nav>
  </header>
);
const router = createBrowserRouter([
  {
    path: "*", 
    element: <ErrorPage />,
  },
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
    element: <CharacterDetails />,
  },
  {
    path: "contacto",
    element: <ContactSection />,
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
