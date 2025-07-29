import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx';

import { HelmetProvider } from 'react-helmet-async';
import About from './components/About/About.jsx';
import Events from './components/Events/Events.jsx';
import Activities from './components/Activities/Activities.jsx';
import Gallary from './components/Gallary/Gallary.jsx';
import Executive from './components/Executives/Executive.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import RegistrationFrom from './components/RegistrationForm/RegistrationFrom.jsx';
import Whyjoin from './components/WhyJoin/Whyjoin.jsx';

// import productJson from '../public/products.json'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      
      
      {
        path: '/activities',
        element: <Activities></Activities>,
        loader: () => fetch('../public/activiteies.json').then(res => res.json()),
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path:"/events",
        element: <Events></Events>,
      },
      {
        path: "/gallary",
        element: <Gallary></Gallary>
      },
      // {
      //   path: "/executives",
      //   element:<Executive></Executive>
      // },
      {
        path: "/contacts",
        element: <Contacts></Contacts>
      },
      {
        path: "/registration",
        element:<RegistrationFrom></RegistrationFrom>
      },
      {
        path: "/executives",
        element: <Whyjoin></Whyjoin>
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider
      router={router}
      fallbackElement={<div>Loading...</div>}
    />
    </HelmetProvider>
  </StrictMode>,
)
