import { FC } from 'react'
import {
  Box, Avatar, Typography, Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IBlogs } from '../../interfaces/IBlogs'
import './style.css'

const Card:FC<Partial<IBlogs>> = ({
  id, title, description, image, user, userId,
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

          <Button
            className="view-btn"
            variant="outlined"
            onClick={() => {
              navigate(`/blogs/${id}`)
            }}
          >
            show more
          </Button>

        </Box>
        <hr />
        <p>
          {description}
        </p>
        <Box className="btn-group">
          <Avatar
            sx={{ width: '35px', height: '35px' }}
            alt={user?.username}
            src={user?.profileImg}
          />
          <Typography onClick={() => {
            navigate(`/users/${userId}`)
          }}
          >
            {user?.username}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
