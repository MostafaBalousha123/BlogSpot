import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import BLog from '../Card'
import './style.css'
import { IBlogs } from '../../interfaces/IBlogs'
import { isYourProfile } from '../../helpers/isYourProfile'
import Empty from '../Empty'

const BlogsContainer:FC<{blogs:IBlogs[]}> = ({ blogs }) => {
  const navigate = useNavigate()
  const params = useParams()

  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated)
  const auth = useSelector((state:any) => state.user.user)

  return (
    <Box>
      <Box className="add-blogs-container">
        <Typography variant="h5">
          {params?.id
            ? isYourProfile(params?.id, auth?.id)
              ? 'Your Blogs' : 'All Blogs'
            : 'All Blogs'}

        </Typography>

        {isYourProfile(params?.id, auth?.id) && (
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            if (isAuthenticated) {
              navigate('/blogs/add')
            } else {
              navigate('/signin')
            }
          }}
        >
          Add Blog
        </Button>
        )}

      </Box>
      <Box className="cards-container">
        { blogs.length ? blogs.map((ele:IBlogs) => (
          <BLog
            id={ele.id}
            userId={ele.userId}
            image={ele.image}
            title={ele.title}
            description={ele.description}
            user={ele.user}
            createdAt={ele.createdAt}
            key={uuidv4()}
          />
        )) : (
          <Empty message={isYourProfile(params?.id, auth?.id)
            ? 'Post your first blogs' : 'Nothing posted yet'}
          />
        ) }
      </Box>
    </Box>

  )
}

export default BlogsContainer
