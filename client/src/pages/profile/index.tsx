import { FC } from 'react'
import Navbar from '../../components/Navbar'
import ProfileHeader from '../../components/ProfileHeader'

import './style.css'

export const Profile:FC = () => (
  <div>
    <Navbar />
    <ProfileHeader />
  </div>
)
