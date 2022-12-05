import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import ProfileHeader from '../../components/ProfileHeader'
import BasicTabs from '../../components/Taps'
import ApiService from '../../services/apiServices'
import { IBlogs } from '../../interfaces/IBlogs'

import './style.css'
import { IUser } from '../../interfaces/IUser'

const initBlog = {
  id: 0,
  title: '',
  content: '',
  description: '',
  image: '',
  userId: 0,
  createdAt: '',
  updatedAt: '',
  user: {
    username: '',
    profileImg: '',
  },
}

const initUser = {
  id: 0,
  username: '',
  email: '',
  bio: '',
  profileImg: '',
  createdAt: '',
  updatedAt: '',
}

export const Profile:FC = () => {
  const [blogs, setBlogs] = useState<IBlogs[]>([initBlog])
  const [user, setUser] = useState<IUser>(initUser)

  const userId = useParams()

  useEffect(() => {
    (async ():Promise<void> => {
      const result = await ApiService.get('/api/v1/blogs', {
        params: {
          userId: userId.id,
        },
      })
      if (result.status === 200) setBlogs(result.data)
    })()
  }, [])

  useEffect(() => {
    (async ():Promise<void> => {
      const result = await ApiService.get(`/api/v1/users/${userId.id}`)
      if (result.status === 200) setUser(result.data)
    })()
  }, [])

  return (
    <div>
      <Navbar />
      <ProfileHeader user={user} blogsCount={blogs.length} />
      <BasicTabs blogs={blogs} />
    </div>
  )
}
