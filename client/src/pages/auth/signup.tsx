import { FC } from 'react'
import './style.css'
import {
  Box, Button, IconButton,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { styledComponents } from '../../components/CustomTextField'
import { auth } from '../../hooks/user/actions'
import { isLogged } from '../../hooks/user/userSlice'
import { validationSchema } from '../../validation/signup'

interface IFormValues {
  username:string;
  email:string;
  password:string;
  confirmPassword?:string;
}

export const Signup:FC = () => {
  const { CustomTextField } = styledComponents
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = async (values:IFormValues):Promise<void> => {
    delete values.confirmPassword
    const response = await auth.signup(values)
    if (response?.data?.access_token) {
      navigate('/')
      dispatch(isLogged())
    }
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
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
          <p>START FOR FREE</p>
          <h1>Create new account.</h1>
          <p>
            Already A Member?
            <Button onClick={() => { navigate('/signin') }}> Log in</Button>
          </p>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <CustomTextField
            id="outlined-basic"
            variant="outlined"
            label="username"
            size="small"
            fullWidth
            className="text-field"
            color="primary"
            InputLabelProps={{
              style: { color: '#ecececae' },
            }}
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
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
          <CustomTextField
            id="outlined-basic"
            variant="outlined"
            label="confirm password"
            type="password"
            size="small"
            fullWidth
            className="text-field"
            color="primary"
            InputLabelProps={{
              style: { color: '#ecececae' },
            }}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />

          <Button className="sign-up-btn" variant="contained" type="submit">Sign Up</Button>
        </form>
      </Box>
    </Box>
  )
}
