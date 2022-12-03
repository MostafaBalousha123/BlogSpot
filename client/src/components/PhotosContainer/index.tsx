/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import { FC, useState } from 'react'
import { Box } from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import Photo from '../Photo'
import './style.css'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    description: 'description',
  },
]

const PhotosContainer:FC = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = ():void => setOpen(true)
  const handleClose = ():void => setOpen(false)
  const [imgInfo, setImgInfo] = useState<any>({})

  return (
    <Box className="photos-container">
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <Box
            key={index}
            onClick={() => {
              handleOpen()
              setImgInfo({
                imgSrc: item.img,
                imgTitle: item.title,
              })
            }}
          >
            <img
              src={`${item.img}?w=1000&auto=format`}
              srcSet={`${item.img}?w=1000&auto=format&dpr=2 2x`}
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
      <Photo
        imgInfo={imgInfo}
        handleClose={handleClose}
        open={open}
      />
    </Box>
  )
}

export default PhotosContainer
