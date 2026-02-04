import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home'
import About from './pages/About'
import Categories from './pages/Categories'
import Cart from './pages/Cart'

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
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
