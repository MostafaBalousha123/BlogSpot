/* eslint-disable react/no-array-index-key */

import { FC } from 'react'

import { Typography, Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BLog from '../Card'
import './style.css'
import { IBlogs } from '../../interfaces/IBlogs'

const BlogsContainer:FC<{blogs:IBlogs[]}> = ({ blogs }) => {
  const navigate = useNavigate()
  const params = useParams()

  const auth = useSelector((state:any) => state.user.user)

  const handleTitle = ():string => {
    if (params?.id && auth?.id && parseInt(params.id, 10) === auth?.id) {
      return 'Your Blogs'
    }
    return 'All Blogs'
  }

  return (
    <div>
      <Box className="add-blogs-container">
        <h2>{handleTitle()}</h2>
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
