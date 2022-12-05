/* eslint-disable react/no-array-index-key */

import { FC } from 'react'

import { Typography, Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import BLog from '../Card'
import './style.css'
import { IBlogs } from '../../interfaces/IBlogs'

const BlogsContainer:FC<{blogs:IBlogs[]}> = ({ blogs }) => {
  const navigate = useNavigate()

  return (
    <div>
      <Box className="add-blogs-container">
        <h2>All Blogs</h2>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate('/blogs/add')}>
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
            description={ele.description}
            user={ele.user}
            createdAt={ele.createdAt}
            key={index}
          />
        )) : <Typography> no blogs</Typography>}
      </Box>
    </div>

  )
}

export default BlogsContainer
