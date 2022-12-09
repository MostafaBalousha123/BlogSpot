import { FC } from 'react'
import Box from '@mui/material/Box'
import { Typography, Modal, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { styledComponents } from '../CustomTextField'
import './style.css'
import { IAddPhotos } from '../../interfaces/props/IAddPhotos'
import UploadImage from '../UploadImage'
import ApiService from '../../services/apiServices'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#111827',
  boxShadow: 24,
  p: 5,
}

const validationSchema = yup.object({
  title: yup
    .string()
    .required('title is required'),
  image: yup
    .string()
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/, 'enter correct image')
    .required('image is required'),
})

const AddPhotos:FC<IAddPhotos> = ({ open, handleClose, setNewPhoto }) => {
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated)
  const navigate = useNavigate()
  const { CustomTextField } = styledComponents

  const handleAddPhoto = async (values:{title:string, image:string}):Promise<void> => {
    const result = await ApiService.post('/api/v1/photos', values)
    if (result.status === 201) {
      setNewPhoto(result.data)
      toast.success('Photo Added Successfully')
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (isAuthenticated) {
        handleAddPhoto(values)
      } else {
        navigate('/signin')
      }
      resetForm()
      handleClose()
    },
  })
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="add-photo-modal">
          <Typography variant="h5">Add Photo</Typography>
          <form onSubmit={formik.handleSubmit}>
            <CustomTextField
              label="title"
              type="text"
              size="small"
              variant="outlined"
              fullWidth
              className="text-field"
              color="primary"
              InputLabelProps={{
                style: { color: '#ecececae' },
              }}
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />

            {/* <CustomTextField
              label="image"
              type="text"
              size="small"
              variant="outlined"
              fullWidth
              className="text-field"
              color="primary"
              InputLabelProps={{
                style: { color: '#ecececae' },
              }}
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              error={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
            /> */}
            <UploadImage formik={formik} />
            <Button type="submit" variant="contained">Add Photo</Button>
          </form>
        </Box>
      </Modal>
    </Box>
  )
}

export default AddPhotos
