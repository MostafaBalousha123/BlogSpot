// eslint-disable-next-line no-unused-vars
import { FC, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import { useDispatch } from 'react-redux'
import {
  Signin, Signup, HomePage, Blogs, Photos, Profile, Blog,
} from './pages'
import ApiService from './services/apiServices'
import { setUser } from './hooks/user/userSlice'

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
    element: <Blog />,
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

const App:FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    (async ():Promise<void> => {
      const user = await ApiService.get('/api/v1/users/me')
      if (user.data) {
        dispatch(setUser(user.data))
      }
    })()
  }, [])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
