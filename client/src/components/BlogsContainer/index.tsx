/* eslint-disable react/no-array-index-key */
import { FC, useEffect, useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import BLog from '../Card'
import './style.css'
import ApiService from '../../services/apiServices'
import { IBlogs } from '../../interfaces/IBlogs'

const initBlog = {
  id: 0,
  title: '',
  content: '',
  image: '',
  userId: 0,
  createdAt: '',
  updatedAt: '',
  user: {
    username: '',
    profileImg: '',
  },
}
const BlogsContainer:FC = () => {
  const [blogs, setBlogs] = useState<IBlogs[]>([initBlog])
  const navigate = useNavigate()
  useEffect(() => {
    (async () => {
      const result = await ApiService.get('/api/v1/blogs')
      if (result.status === 200) setBlogs(result.data)
    })()
  }, [])

  return (
    <div>
      <Box className="add-blogs-container">
        <h2>All Blogs</h2>
        <Button variant="outlined" startIcon={<AddIcon />} onClick={() => navigate('/blogs/add')}>
          Add Blog
        </Button>
      </Box>
      <Box className="cards-container">
        { blogs.length ? blogs.map((ele:IBlogs, index:number) => (
          <BLog
            id={ele.id}
            userId={ele.userId}
            image={ele.image}
            title={ele.title}
            content={ele.content}
            user={ele.user}
            key={index}
          />
        )) : <Typography> no blogs</Typography>}
      </Box>
    </div>

  )
}

export default BlogsContainer
