import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import { useParams, useSearchParams } from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,  
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'cart',
    element: <Cart />
  },
  {
    path: 'categories',
    element: <Categories />
  },
  {
    path: 'product',
    element: <ProductDetails />
  },
  {
    path: "*",
    element: <NotFound />,
  }
]) */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/category/:id',
        element: <Category />
      },
      {
        path: '/product/:name',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
