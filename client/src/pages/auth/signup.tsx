import { FC } from 'react'
import './style.css'
import {
  Box, Button, IconButton,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { styledComponents } from './style'

export const Signup:FC = () => {
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
          <p>START FOR FREE</p>
          <h1>Create new account.</h1>
          <p>
            Already A Member?
            <Button onClick={() => { navigate('/signin') }}> Log in</Button>
          </p>
        </Box>

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
        />

        <Button className="sign-up-btn" variant="contained">Sign Up</Button>
      </Box>
    </Box>
  )
}
