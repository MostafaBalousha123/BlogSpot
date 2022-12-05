import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import ProfileHeader from '../../components/ProfileHeader'
import BasicTabs from '../../components/Taps'
import ApiService from '../../services/apiServices'
import { IBlogs } from '../../interfaces/IBlogs'

import './style.css'

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

export const Profile:FC = () => {
  const [blogs, setBlogs] = useState<IBlogs[]>([initBlog])
  const userId = useParams()
  useEffect(() => {
    (async () => {
      const result = await ApiService.get('/api/v1/blogs', {
        params: {
          userId: userId.id,
        },
      })
      if (result.status === 200) setBlogs(result.data)
    })()
  }, [])

  return (
    <div>
      <Navbar />
      <ProfileHeader />
      <BasicTabs blogs={blogs} />
    </div>
  )
}
