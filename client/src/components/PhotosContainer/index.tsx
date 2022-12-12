/* eslint-disable max-len */
import { FC, useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import AddIcon from '@mui/icons-material/Add'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Photo from '../Photo'
import './style.css'
import { IPhotos } from '../../interfaces/IPhotos'
import { isYourProfile } from '../../helpers/isYourProfile'
import Empty from '../Empty'
import AddPhotos from '../AddPhotos'
import { IPhotoContainer } from '../../interfaces/props/PhotoContainer'

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

const PhotosContainer:FC<IPhotoContainer> = ({ photos, setPhotos }) => {
  const [open, setOpen] = useState(false)
  const [imgInfo, setImgInfo] = useState<IPhotos>(initPhoto)
  const [newPhoto, setNewPhoto] = useState<IPhotos>(initPhoto)
  const [openAddPhoto, setOpenAddPhoto] = useState(false)
  const [deletedIds, setDeletedIds] = useState<number[]>([])
  const [updatedPhoto, setUpdatedPhoto] = useState<Partial<IPhotos>>(initPhoto)

  const handleOpenAddPhoto = ():void => setOpenAddPhoto(true)
  const handleCloseAddPhoto = ():void => setOpenAddPhoto(false)

  const handleOpen = ():void => setOpen(true)
  const handleClose = ():void => setOpen(false)
  const params = useParams()
  const navigate = useNavigate()

  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated)
  const auth = useSelector((state:any) => state.user.user)

  useEffect(() => {
    if (newPhoto.id) {
      setPhotos([newPhoto, ...photos])
    }
  }, [newPhoto])

  return (
    <Box className="photos-container">
      <Box className="photos-container-header">
        <Typography variant="h5">
          {params?.id
            ? isYourProfile(params?.id, auth?.id)
              ? 'Your Photos' : 'All Photos'
            : 'All Photos'}
        </Typography>

        {isYourProfile(params?.id, auth?.id)
        && (
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            if (isAuthenticated) {
              handleOpenAddPhoto()
            } else {
              navigate('/signin')
            }
          }}
        >
          Add Photo
        </Button>
        )}

      </Box>
      {
        photos.length
          ? (
            <Masonry columns={3} spacing={2}>
              {photos.filter((data:IPhotos) => !deletedIds?.includes(data.id))
                .map((item:IPhotos) => (
                  <Box
                    key={uuidv4()}
                    onClick={() => {
                      handleOpen()
                      setImgInfo(item)
                    }}
                  >
                    <img
                      src={`${updatedPhoto.id === item.id ? updatedPhoto.image : item.image}?w=800&auto=format`}
                      srcSet={`${updatedPhoto.id === item.id ? updatedPhoto.image : item.image}?w=800&auto=format&dpr=2 2x`}
                      alt={updatedPhoto.id === item.id ? updatedPhoto.title : item.title}
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
        setDeletedIds={setDeletedIds}
        setUpdatedPhoto={setUpdatedPhoto}
        updatedPhoto={updatedPhoto}
      />
      <AddPhotos
        open={openAddPhoto}
        handleClose={handleCloseAddPhoto}
        setNewPhoto={setNewPhoto}
      />
    </Box>
  )
}

export default PhotosContainer
