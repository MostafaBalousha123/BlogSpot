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
import ApiService from '../../services/apiServices'
import { styledComponents } from '../CustomTextField'
import { modules, formats } from './provider'

Quill.register('modules/imageResize', ImageResize)

const TextEditor:FC = () => {
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated)

  const { CustomTextField } = styledComponents
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleAddBlog = async ():Promise<void> => {
    if (isAuthenticated) {
      const result = await ApiService.post('/api/v1/blogs', { title, image, content })
      if (result.status === 201) navigate('/blogs')
    } else {
      navigate('/signin')
    }
  }

  return (
    <Box className="text-editor">
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <CustomTextField
        label="image"
        type="url"
        size="small"
        variant="outlined"
        fullWidth
        className="text-field"
        color="primary"
        InputLabelProps={{
          style: { color: '#ecececae' },
        }}
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
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
        onClick={handleAddBlog}
      >
        Add Blog
      </Button>
    </Box>
  )
}

export default TextEditor
