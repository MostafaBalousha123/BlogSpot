/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { Box, Avatar } from '@mui/material'
import cardDefault from '../../assets/image/cardDefault.png'
import './style.css'

const Card:FC = () => (
  <Box className="card">
    <img src={cardDefault} alt="product" />
    <Box className="card-body">
      <Box className="row">
        <Box className="card-title">
          <h4>blog title blog title blog title blog title blog title</h4>
        </Box>
        <Box className="view-btn">
          <a href="">show more</a>
        </Box>
      </Box>
      <hr />
      <p>
        blog content,blog content
        blog content
        blog content
        blog content
        blog content
        blog content
        blog content
        blog content
        blog content
        blog content
        blog content
        blog content
        blog content

      </p>
      <Box className="btn-group">
        <Box className="avatar">
          <Avatar sx={{ width: '35px', height: '35px' }} alt="Remy Sharp" src="" />
        </Box>
        <Box className="btn">
          <a href="">mostafa omar</a>
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Card
