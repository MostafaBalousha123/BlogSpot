import { FC } from 'react'
import './style.css'
import { Box, TextField } from '@mui/material'

export const Signup:FC = () => (
  <Box className="auth-container">
    <Box className="image-container">
      <img src="mostafa.png" alt="img" />
    </Box>

    <Box className="form-container">
      <h2 className="form-title">Get Started</h2>
      <TextField
        label="email"
        type="email"
        size="small"
        variant="filled"
        fullWidth
        className="text-field"
        color="primary"
      />
      <TextField
        id="outlined-basic"
        variant="filled"
        label="username"
        size="small"
        fullWidth
        className="text-field"
        color="primary"
      />
      <TextField
        id="outlined-basic"
        variant="filled"
        label="password"
        type="password"
        size="small"
        fullWidth
        className="text-field"
        color="primary"
        sx={{ backgroundColor: 'black' }}
      />
      <TextField
        id="outlined-basic"
        variant="filled"
        label="profile image"
        type="url"
        size="small"
        fullWidth
        className="text-field"
        color="primary"
      />
    </Box>
  </Box>
)
