// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import { Signin, Signup, HomePage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <div>404!</div>,
  },
])

const App:FC = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
)

export default App
