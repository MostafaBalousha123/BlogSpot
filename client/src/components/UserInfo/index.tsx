import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { IUserInfo } from '../../interfaces/props/IUserInfo'

import './style.css'

const UserInfo:FC<IUserInfo> = ({
  id, username, createdAt, profileImg,
}) => {
  const navigate = useNavigate()
  return (
    <Box
      className="userInfo"
      onClick={() => { navigate(`/users/${id}`) }}
    >
      <img
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        alt={username}
        src={profileImg}
      />
      <Box>
        <Typography variant="body2" className="username">{username}</Typography>
        <Typography
          variant="body2"
          className="date"
        >
          {dayjs(createdAt).format('MMM D, YYYY')}
        </Typography>
      </Box>
    </Box>
  )
}

export default UserInfo
