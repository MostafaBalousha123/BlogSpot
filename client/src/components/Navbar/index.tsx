import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  AppBar, Box, Toolbar, Typography, IconButton,
  MenuItem, Menu, Button,
} from '@mui/material'

import AccountCircle from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'

import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { sxStyle } from './style'
import { logout } from '../../hooks/user/userSlice'
import { auth as test } from '../../hooks/user/actions'

const Navbar:FC = () => {
  const isAuthenticated = useSelector((state:any) => state.user.isAuthenticated)
  const [auth, setAuth] = React.useState(isAuthenticated)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleMenu = (event: React.MouseEvent<HTMLElement>):void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = ():void => {
    setAnchorEl(null)
  }

  useEffect(() => {
    setAuth(isAuthenticated)
  }, [isAuthenticated])

  const handleLogout = ():void => {
    setAuth(false)
    dispatch(logout())
    test.logout()
  }
  const {
    Search, SearchIconWrapper, StyledInputBase,
  } = sxStyle

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => { navigate('/') }}
          >
            LOGO
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box className="tabs-container">
            <Typography
              variant="h6"
              component="div"
              className="nav-btn"
              onClick={() => { navigate('/') }}
            >
              Home
            </Typography>

            <Typography
              variant="h6"
              component="div"
              className="nav-btn"
              onClick={() => { navigate('/blogs') }}
            >
              Blogs
            </Typography>

            <Typography
              variant="h6"
              component="div"
              className="nav-btn"
              onClick={() => { navigate('/photos') }}
            >
              Photos
            </Typography>
          </Box>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {
                  handleClose()
                  navigate('/users/1')
                }}
                >
                  Profile
                </MenuItem>
                <MenuItem onClick={() => {
                  handleClose()
                  navigate('/')
                }}
                >
                  My account
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Box className="auth-btns">
              <Button className="signin-btn" onClick={() => { navigate('/signin') }}>Login</Button>
              <Button
                className="signup-btn"
                onClick={() => { navigate('/signup') }}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
