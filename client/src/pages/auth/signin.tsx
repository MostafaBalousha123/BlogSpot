import { useState, FC } from 'react'
import './style.css'
import {
  Box, Button, IconButton,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { styledComponents } from '../../components/CustomTextField'
import { auth } from '../../hooks/user/actions'
import { isLogged } from '../../hooks/user/userSlice'

export const Signin:FC = () => {
  const { CustomTextField } = styledComponents
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async ():Promise<void> => {
    const response = await auth.signin({ email, password })
    if (response.data?.access_token) {
      navigate('/')
      dispatch(isLogged())
    }
  }
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="sign-up-btn" variant="contained" onClick={handleSubmit}>Sign In</Button>
      </Box>
    </Box>
  )
}
