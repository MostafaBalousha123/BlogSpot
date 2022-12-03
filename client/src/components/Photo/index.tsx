/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import {
  Box, Typography, Modal, Button, Avatar,
} from '@mui/material'
import './style.css'
import SuggestedPhotos from '../SuggestedPhotos'

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

        <Box className="test">
          <Box className="btn-group">
            <Avatar
              sx={{ width: '35px', height: '35px', margin: '0 10px' }}
              alt="Remy Sharp"
              src=""
            />
            <Typography style={{ display: 'inline' }}>mostafa</Typography>
          </Box>
          <Button variant="contained">Download</Button>
        </Box>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          {imgInfo.imgTitle}
        </Typography>
        <img src={imgInfo.imgSrc} alt={imgInfo.imgTitle} />
        <SuggestedPhotos />
      </Box>
    </Modal>

  </Box>
)
export default Photo
