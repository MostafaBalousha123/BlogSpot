import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import ProfileHeader from '../../components/ProfileHeader'
import BasicTabs from '../../components/Taps'
import ApiService from '../../services/apiServices'
import './style.css'

import { IBlogs } from '../../interfaces/IBlogs'
import { IUser } from '../../interfaces/IUser'
import { IPhotos } from '../../interfaces/IPhotos'
import { initValues } from './initValues'

const { initUser, initBlog, initPhoto } = initValues

export const Profile:FC = () => {
  const [user, setUser] = useState<IUser>(initUser)
  const [blogs, setBlogs] = useState<IBlogs[]>([initBlog])
  const [photos, setPhotos] = useState<IPhotos[]>([initPhoto])

  const userId = useParams()

  useEffect(() => {
    const fetchBlogs = async ():Promise<void> => {
      const result = await ApiService.get('/api/v1/blogs', {
        params: {
          userId: userId.id,
        },
      })
      if (result.status === 200) setBlogs(result.data)
    }

    const fetchUser = async ():Promise<void> => {
      const result = await ApiService.get(`/api/v1/users/${userId.id}`)
      if (result.status === 200) setUser(result.data)
    }

    const fetchPhotos = async ():Promise<void> => {
      const result = await ApiService.get('/api/v1/photos', {
        params: {
          userId: userId.id,
        },
      })
      if (result.status === 200) setPhotos(result.data)
    }

    fetchUser()
    fetchBlogs()
    fetchPhotos()
  }, [])

  return (
    <div>
      <Navbar />
      <ProfileHeader user={user} blogsCount={blogs.length} photosCount={photos.length} />
      <BasicTabs blogs={blogs} photos={photos} />
    </div>
  )
}
