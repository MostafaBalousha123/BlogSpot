/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import {
  Box, Typography, Modal, Button, DialogTitle, DialogActions, Dialog,
} from '@mui/material'
import { saveAs } from 'file-saver'
import './style.css'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import SuggestedPhotos from '../SuggestedPhotos'
import UserInfo from '../UserInfo'
import ApiService from '../../services/apiServices'
import { IPhotoDetails } from '../../interfaces/props/IPhotoDetails'

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

const Photo:FC<IPhotoDetails> = ({
  imgInfo, handleClose, open, setDeletedIds,
}) => {
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated)
  const auth = useSelector((state:any) => state.user.user)
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false)

  const handleOpenConfirm = ():void => {
    setOpenConfirmDelete(true)
  }

  const handleCloseConfirm = ():void => {
    setOpenConfirmDelete(false)
  }

  const downloadImage = ():void => {
    saveAs(imgInfo.image, 'image.jpg')
  }

  const handleDeletePhoto = async (id:number):Promise<void> => {
    const result = await ApiService.delete(`/api/v1/photos/${id}`)
    if (result.status === 200) {
      toast.success('The photo deleted successfully')
      setDeletedIds((prev:number[]) => [...prev, id])
    }
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

            <Box>
              { auth?.id === imgInfo.userId && isAuthenticated && (
              <Box className="photo-operations">
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleOpenConfirm}
                >
                  delete
                </Button>
                <Button variant="contained" sx={{ backgroundColor: '#1F2937' }}>edit</Button>
              </Box>
              ) }
              <Button
                variant="contained"
                onClick={downloadImage}
                className="download-btn"
              >
                Download
              </Button>
            </Box>
          </Box>

          <Dialog
            open={openConfirmDelete}
            onClose={handleCloseConfirm}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            PaperProps={{
              style: {
                backgroundColor: '#1F2937',
                boxShadow: 'none',
              },
            }}
          >
            <DialogTitle id="alert-dialog-title" sx={{ color: '#ececec' }}>
              Delete this photo?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleCloseConfirm} sx={{ color: '#ececec' }}>Cancel</Button>
              <Button
                onClick={() => {
                  handleDeletePhoto(imgInfo.id)
                  handleCloseConfirm()
                  handleClose()
                }}
                color="error"
                autoFocus
              >
                Confirm Delete
              </Button>
            </DialogActions>
          </Dialog>

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
