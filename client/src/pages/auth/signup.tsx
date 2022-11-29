import { FC } from 'react'
import './style.css'
import { Box, TextField, Button } from '@mui/material'

export const Signup:FC = () => (
  <Box className="auth-container">
    <Box className="image-container">
      <img src="mostafa.png" alt="img" />
    </Box>

    <Box className="form-container">
      <h2 className="form-title">Get Started</h2>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="username"
        size="small"
        fullWidth
        className="text-field"
        color="primary"
      />
      <TextField
        label="email"
        type="email"
        size="small"
        variant="outlined"
        fullWidth
        className="text-field"
        color="primary"
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="password"
        type="password"
        size="small"
        fullWidth
        className="text-field"
        color="primary"
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="profile image"
        type="url"
        size="small"
        fullWidth
        className="text-field"
        color="primary"
      />

      <Button variant="contained">Contained</Button>

    </Box>
  </Box>
)
