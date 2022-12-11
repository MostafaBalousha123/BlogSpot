import { FC } from 'react'
import './style.css'
import {
  Box, Button, IconButton,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { styledComponents } from '../../components/CustomTextField'
import { auth } from '../../hooks/user/actions'
import { isLogged } from '../../hooks/user/userSlice'
import { validationSchema } from '../../validation/signin'

interface IFormValues {
  email:string;
  password:string;
}
export const Signin:FC = () => {
  const { CustomTextField } = styledComponents
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (values:IFormValues):Promise<void> => {
    const response = await auth.signin(values)
    if (response.data?.access_token) {
      navigate('/')
      dispatch(isLogged())
    }
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values)
    },
  })
  return (
    <Box className="auth-container">
      <IconButton
        className="logo"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => { navigate('/') }}
      >
        LOGO
      </IconButton>
      <Box className="form-container">
        <Box className="form-title">
          <p>WELCOME BACK!</p>
          <h1>Sign in to tefo Blogs.</h1>
          <p>
            Not A Member?
            <Button onClick={() => { navigate('/signup') }}> Sign up</Button>
          </p>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            label="email"
            type="email"
            size="small"
            variant="outlined"
            fullWidth
            className="text-field"
            color="primary"
            InputLabelProps={{
              style: { color: '#ecececae' },
            }}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <CustomTextField
            id="outlined-basic"
            variant="outlined"
            label="password"
            type="password"
            size="small"
            fullWidth
            className="text-field"
            color="primary"
            InputLabelProps={{
              style: { color: '#ecececae' },
            }}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button className="sign-up-btn" variant="contained" type="submit">Sign In</Button>
        </form>
      </Box>
    </Box>
  )
}
