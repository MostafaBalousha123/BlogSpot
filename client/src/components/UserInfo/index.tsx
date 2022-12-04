import { FC } from 'react'
import { Avatar, Box, Typography } from '@mui/material'
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
      <Avatar
        sx={{ width: '40px', height: '40px' }}
        alt={username}
        src={profileImg}
      />
      <Box>
        <Typography className="username">{username}</Typography>
        <Typography className="date">{dayjs(createdAt).format('MMM D, YYYY')}</Typography>
      </Box>
    </Box>
  )
}

export default UserInfo
