import { FC } from 'react'
import {
  Box, Button, Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IBlogs } from '../../interfaces/IBlogs'
import './style.css'
import UserInfo from '../UserInfo'

const Card:FC<Partial<IBlogs>> = ({
  id, title, description, image, user, userId, createdAt,
}) => {
  const navigate = useNavigate()
  return (
    <Box className="card">
      <img src={image} alt={title} />
      <Box className="card-body">
        <Box className="row">
          <Box className="card-title">
            <Typography variant="h5">{title}</Typography>
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
        <Typography variant="body2">
          {description}
        </Typography>

        <Box className="btn-group">
          <UserInfo
            id={userId}
            username={user?.username}
            profileImg={user?.profileImg}
            createdAt={createdAt}
          />
        </Box>

      </Box>
    </Box>
  )
}

export default Card
