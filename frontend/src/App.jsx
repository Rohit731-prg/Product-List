import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import ProductInsert from './components/ProductInsert'
import EditItem from './components/EditItem'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add',
    element: <ProductInsert />,
  },
  {
    path: '/edit/:id',
    element: <EditItem/>,
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App