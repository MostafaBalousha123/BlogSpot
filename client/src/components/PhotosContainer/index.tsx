import { FC, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import AddIcon from '@mui/icons-material/Add'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Photo from '../Photo'
import './style.css'
import { IPhotos } from '../../interfaces/IPhotos'
import { isYourProfile } from '../../helpers/isYourProfile'
import Empty from '../Empty'

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
const PhotosContainer:FC<{photos:IPhotos[]}> = ({ photos }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = ():void => setOpen(true)
  const handleClose = ():void => setOpen(false)
  const [imgInfo, setImgInfo] = useState<IPhotos>(initPhoto)

  const params = useParams()

  const auth = useSelector((state:any) => state.user.user)

  return (
    <Box className="photos-container">
      <Box className="photos-container-header">
        <Typography variant="h5">
          {isYourProfile(params?.id, auth?.id)
            ? 'Your Photos' : 'All Photos'}
        </Typography>

        {isYourProfile(params?.id, auth?.id)
        && <Button variant="contained" startIcon={<AddIcon />}>Add Photo</Button>}
      </Box>
      {
        photos.length
          ? (
            <Masonry columns={3} spacing={2}>
              {photos.map((item:IPhotos) => (
                <Box
                  key={uuidv4()}
                  onClick={() => {
                    handleOpen()
                    setImgInfo(item)
                  }}
                >
                  <img
                    src={`${item.image}?w=1000&auto=format`}
                    srcSet={`${item.image}?w=1000&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: 'block',
                      width: '100%',
                    }}
                  />
                </Box>
              ))}
            </Masonry>
          ) : (
            <Empty message={isYourProfile(params?.id, auth?.id)
              ? 'Post your first Photos' : 'Nothing posted yet'}
            />
          )
            }

      <Photo
        imgInfo={imgInfo}
        handleClose={handleClose}
        open={open}
      />
    </Box>
  )
}

export default PhotosContainer
