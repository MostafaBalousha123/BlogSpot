import { FC } from 'react'
import {
  Box, Chip, Typography, Button,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import header from '../../assets/image/profileHeader.png'
import './style.css'
import { IUser } from '../../interfaces/IUser'
import { isYourProfile } from '../../helpers/isYourProfile'

interface IProfileHeader{
  user: IUser,
  blogsCount:number,
  photosCount:number,
}

const ProfileHeader:FC<IProfileHeader> = ({ user, blogsCount, photosCount }) => {
  const { username, bio, profileImg } = user

  const params = useParams()

  const auth = useSelector((state:any) => state.user.user)

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Chip
              sx={{ margin: '5px' }}
              label={`${blogsCount} blogs`}
              variant="outlined"
              color="primary"
            />

            <Chip
              sx={{ margin: '5px' }}
              label={`${photosCount} photos`}
              variant="outlined"
              color="primary"
            />
          </Box>
          {isYourProfile(params.id, auth?.id) && (
          <Button
            className="edit-profile-btn"
            variant="contained"
            color="secondary"
          >
            Edit Profile
          </Button>
          )}
        </Box>

      </Box>

    </Box>
  )
}

export default ProfileHeader
