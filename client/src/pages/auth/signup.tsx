import { FC } from 'react'
import './style.css'
import {
  Box, Button,
} from '@mui/material'
import { styledComponents } from './style'

export const Signup:FC = () => {
  const { CustomTextField } = styledComponents
  return (
    <Box className="auth-container">
      <Box className="image-container">
        {/* <img src="mostafa.png" alt="img" /> */}
      </Box>

      <Box className="form-container">
        <h2 className="form-title">Get Started</h2>
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

        <Button variant="contained">Sign Up</Button>

      </Box>
    </Box>
  )
}
