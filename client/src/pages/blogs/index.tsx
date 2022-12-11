import { FC, useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
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
  const [loader, setLoader] = useState<boolean>(true)
  useEffect(() => {
    (async () => {
      const result = await ApiService.get('/api/v1/blogs')
      if (result.status === 200) {
        setBlogs(result.data)
        setLoader(false)
      }
    })()
  }, [])

  return (
    <Box>
      <Navbar />
      {loader ? (
        <CircularProgress
          sx={{
            margin: '250px auto',
            display: 'block',
          }}
          color="secondary"
        />
      )
        : <BlogsContainer blogs={blogs} />}
    </Box>
  )
}
