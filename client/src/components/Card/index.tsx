import { FC } from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IBlogs } from '../../interfaces/IBlogs'
import './style.css'

const Card:FC<Partial<IBlogs>> = ({
  id, title, content, image, user, userId,
}) => {
  const navigate = useNavigate()
  return (
    <Box className="card">
      <img src={image} alt={title} />
      <Box className="card-body">
        <Box className="row">
          <Box className="card-title">
            <h4>{title}</h4>
          </Box>
          <Box className="view-btn">
            <Typography onClick={() => {
              navigate(`/blogs/${id}`)
            }}
            >
              show more
            </Typography>
          </Box>
        </Box>
        <hr />
        <p>
          {content}
        </p>
        <Box className="btn-group">
          <Box className="avatar">
            <Avatar
              sx={{ width: '35px', height: '35px' }}
              alt={user?.username}
              src={user?.profileImg}
            />
          </Box>
          <Box
            className="btn"
            onClick={() => {
              navigate(`/users/${userId}`)
            }}
          >
            <Typography>{user?.username}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
