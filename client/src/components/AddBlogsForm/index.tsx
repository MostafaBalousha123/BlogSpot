import {
  FC, useState,
} from 'react'
import ReactQuill, { Quill } from 'react-quill'
import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ImageResize from 'quill-image-resize-module-react'
import 'react-quill/dist/quill.snow.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import ApiService from '../../services/apiServices'
import { styledComponents } from '../CustomTextField'
import { modules, formats } from './provider'
import { validationSchema } from '../../validation/AddBlog'
import UploadImage from '../UploadImage'

Quill.register('modules/imageResize', ImageResize)
const { CustomTextField } = styledComponents

const AddBlogsForm:FC = () => {
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated)
  const navigate = useNavigate()

  const [content, setContent] = useState<string>('')

  const handleAddBlog = async (values:any):Promise<void> => {
    console.log(content)
    if (isAuthenticated) {
      const result = await ApiService.post('/api/v1/blogs', { content, ...values })
      if (result.status === 201) {
        toast.success(result.data.message)
        navigate('/blogs')
      }
    } else {
      navigate('/signin')
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      image: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (isAuthenticated) {
        handleAddBlog(values)
      } else {
        navigate('/signin')
      }
      resetForm()
    },
  })

  return (
    <Box className="text-editor">
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

        <CustomTextField
          label="description"
          type="text"
          size="small"
          variant="outlined"
          fullWidth
          className="text-field"
          color="primary"
          InputLabelProps={{
            style: { color: '#ecececae' },
          }}
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />

        <UploadImage formik={formik} />

        <h4>Content</h4>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          style={{ margin: '10px 0 30px' }}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          type="submit"
          onClick={() => {
            if (content.trim() === '') {
              toast.error('content is required')
            }
            if (formik.values.image.trim() === '') {
              toast.error('image is required')
            }
          }}
        >
          Add Blog
        </Button>
      </form>
    </Box>
  )
}

export default AddBlogsForm
