import React, { FC } from 'react'

import {
  AppBar, Box, Toolbar, Typography, IconButton,
  MenuItem, Menu, Button,
} from '@mui/material'

import AccountCircle from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'

import './style.css'
import { sxStyle } from './style'

const Navbar:FC = () => {
  const [auth] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>):void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = ():void => {
    setAnchorEl(null)
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
          >
            LOGO
            {' '}
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
            <Typography variant="h6" component="div" className="nav-btn">
              Home
            </Typography>

            <Typography variant="h6" component="div" className="nav-btn">
              Blogs
            </Typography>

            <Typography variant="h6" component="div" className="nav-btn">
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          ) : (
            <Box className="auth-btns">
              <Button className="signin-btn">Login</Button>
              <Button className="signup-btn">Sign Up</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
