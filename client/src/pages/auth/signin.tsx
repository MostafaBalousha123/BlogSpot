import { FC } from 'react'
import './style.css'
import {
  Box, Button, IconButton,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { styledComponents } from './style'

export const Signin:FC = () => {
  const { CustomTextField } = styledComponents
  const navigate = useNavigate()
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
        />
        <Button className="sign-up-btn" variant="contained">Sign In</Button>
      </Box>
    </Box>
  )
}
