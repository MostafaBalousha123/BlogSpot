/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import {
  Box, Typography, Modal,
} from '@mui/material'
import './style.css'
import SuggestedPhotos from '../SuggestedPhotos'
import UserInfo from '../UserInfo'

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
    imgInfo:any,
    handleClose:any,
    open:boolean
  }

const Photo:FC<test> = ({ imgInfo, handleClose, open }) => (
  <Box className="card-photo">
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="img-details-container">

        <UserInfo
          id={1}
          username="user?.username"
          profileImg="user?.profileImg"
          createdAt="createdAt"
        />

        <Typography id="modal-modal-title" variant="h6">
          {imgInfo.imgTitle}
        </Typography>
        <img src={imgInfo.imgSrc} alt={imgInfo.imgTitle} />
        <SuggestedPhotos />
      </Box>
    </Modal>

  </Box>
)
export default Photo
