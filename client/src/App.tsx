// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import {
  Signin, Signup, HomePage, Blogs, Photos, Profile,
} from './pages'

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
    path: '/blogs',
    element: <Blogs />,
  },
  {
    path: '/blogs/:id',
    element: <Blogs />,
  },
  {
    path: '/photos',
    element: <Photos />,
  },
  {
    path: '/users/:id',
    element: <Profile />,
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
