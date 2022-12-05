import { FC } from 'react'
import { Box, Chip } from '@mui/material'
import header from '../../assets/image/profileHeader.png'
import avatar from '../../assets/image/profileAvatar.png'

import './style.css'

const ProfileHeader:FC = () => (
  <Box className="profile-user-info">
    <Box className="images-container">
      <img className="header" src={header} alt="" />
      <img className="avatar" src={avatar} alt="" />
    </Box>
    <Box className="bio-container">
      <h2>username</h2>
      <p>
        bio: Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nisi eveniet tempora
        officia nesciunt soluta amet, iure provident
        sequi! Ea sapiente blanditiis nostrum quasi
        voluptatum fuga corrupti atque sequi
        repellat nesciunt!
      </p>
      <Chip sx={{ margin: '5px' }} label="30 blogs" variant="outlined" color="primary" />
      <Chip sx={{ margin: '5px' }} label="30 photos" variant="outlined" color="primary" />
    </Box>

  </Box>
)

export default ProfileHeader
