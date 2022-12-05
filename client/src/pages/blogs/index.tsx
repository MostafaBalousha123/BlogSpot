import { FC, useEffect, useState } from 'react'
import BlogsContainer from '../../components/BlogsContainer'
import Navbar from '../../components/Navbar'
import ApiService from '../../services/apiServices'
import { IBlogs } from '../../interfaces/IBlogs'

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

export const Blogs:FC = () => {
  const [blogs, setBlogs] = useState<IBlogs[]>([initBlog])
  useEffect(() => {
    (async () => {
      const result = await ApiService.get('/api/v1/blogs')
      if (result.status === 200) setBlogs(result.data)
    })()
  }, [])

  return (
    <div>
      <Navbar />
      <BlogsContainer blogs={blogs} />
    </div>
  )
}
