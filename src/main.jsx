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
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';
import Gadgets from './components/Gadgets/Gadgets.jsx';

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
        path:'/gadgets',
        element:<Gadgets></Gadgets>,
        loader:()=>fetch('/products.json'),
      },
      {
          path:'gadgetsdetails/:product_id',
          element:<GadgetDetails></GadgetDetails>,
          loader:()=>fetch('/products.json'),
      },
    ],
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<div>Loading...</div>}
    />
  </StrictMode>,
)




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//         children: [
//           {
//             path: "/home/gadgets/:product_id",
//             element: <GadgetDetails />,
//             loader:()=>fetch('/package.json'),

//           },
//         ],
//       },
//     ],
//   }
// ]);