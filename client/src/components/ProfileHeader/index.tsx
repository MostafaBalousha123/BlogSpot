import { FC } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import header from '../../assets/image/profileHeader.png'
import './style.css'
import { IUser } from '../../interfaces/IUser'

const ProfileHeader:FC<{user: IUser, blogsCount:number}> = ({ user, blogsCount }) => {
  const { username, bio, profileImg } = user
  return (
    <Box className="profile-user-info">
      <Box className="images-container">
        <img className="header" src={header} alt="" />
        <img className="avatar" src={profileImg} alt={username} />
      </Box>
      <Box className="bio-container">
        <Typography variant="h5">{username}</Typography>
        <Typography variant="body2">
          bio:
          {bio}
        </Typography>
        <Chip
          sx={{ margin: '5px' }}
          label={`${blogsCount} blogs`}
          variant="outlined"
          color="primary"
        />
        <Chip sx={{ margin: '5px' }} label="30 photos" variant="outlined" color="primary" />
      </Box>

    </Box>
  )
}

export default ProfileHeader
