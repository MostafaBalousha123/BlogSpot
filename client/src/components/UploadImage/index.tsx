import { Button, Box, CircularProgress } from '@mui/material'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { FormikProps } from 'formik'
import './style.css'

const UploadImage:FC<{formik:FormikProps<any>}> = ({ formik }) => {
  const [url, setUrl] = useState('')
  const [loader, setLoader] = useState<boolean>(false)

  const uploadImage = (e:any):void => {
    const data = new FormData()

    data.append('file', e.target.files[0])
    data.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`)
    data.append('cloud_name', `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}`)
    fetch(`${process.env.REACT_APP_CLOUDINARY_BASE_URL}`, {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((result) => {
        setUrl(result.url)
        formik.setFieldValue('image', result.url)
        setLoader(false)
      })
      .catch((err) => toast.error(err))
  }

  return (
    <Box>
      <Box className="upload-image-container">
        <Button
          color="primary"
          startIcon={<PhotoCamera />}
          aria-label="upload picture"
          variant="contained"
          component="label"
        >
          Upload
          <input
            hidden
            accept="image/*"
            type="file"
            name="image"
            onChange={(e:any) => {
              setUrl('')
              setLoader(true)
              uploadImage(e)
            }}
          />
        </Button>
        {loader && <CircularProgress /> }
        { url && <img width="100px" src={url} alt="test" />}
      </Box>

    </Box>
  )
}
export default UploadImage
