/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import {
  Box, Typography, Modal, Button,
} from '@mui/material'
import { saveAs } from 'file-saver'
import './style.css'
import SuggestedPhotos from '../SuggestedPhotos'
import UserInfo from '../UserInfo'
import { IPhotos } from '../../interfaces/IPhotos'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#111827',
  boxShadow: 24,
  p: 4,
}

  interface test {
    imgInfo:IPhotos,
    handleClose:any,
    open:boolean
  }

const Photo:FC<test> = ({ imgInfo, handleClose, open }) => {
  const downloadImage = ():void => {
    saveAs(imgInfo.image, 'image.jpg') // Put your image url here.
  }
  return (
    <Box className="card-photo">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="img-details-container">

          <Box className="img-details-header">
            <UserInfo
              id={1}
              username={imgInfo.user?.username}
              profileImg={imgInfo.user?.profileImg}
              createdAt={imgInfo.createdAt}
            />
            <Button
              variant="contained"
              onClick={downloadImage}
              className="download-btn"
            >
              Download
            </Button>
          </Box>

          <Typography id="modal-modal-title" variant="h6">
            {imgInfo.title}
          </Typography>
          <img src={imgInfo.image} alt={imgInfo.title} />
          <SuggestedPhotos />
        </Box>
      </Modal>

    </Box>
  )
}
export default Photo
