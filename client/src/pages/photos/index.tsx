import { FC, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Navbar from '../../components/Navbar'
import PhotoContainer from '../../components/PhotosContainer'
import ApiService from '../../services/apiServices'
import { IPhotos } from '../../interfaces/IPhotos'

const initPhoto = {
  id: 0,
  title: '',
  image: '',
  userId: 0,
  createdAt: '',
  updatedAt: '',
  user: {
    username: '',
    profileImg: '',
  },
}

export const Photos:FC = () => {
  const [photos, setPhotos] = useState<IPhotos[]>([initPhoto])
  useEffect(() => {
    (async () => {
      const result = await ApiService.get('/api/v1/photos')
      if (result.status === 200) setPhotos(result.data)
    })()
  }, [])
  return (
    <Box>
      <Navbar />
      <PhotoContainer photos={photos} />
    </Box>
  )
}
