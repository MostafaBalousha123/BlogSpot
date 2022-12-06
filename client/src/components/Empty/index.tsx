import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import emptyImg from '../../assets/image/empty.png'
import './style.css'

const Empty:FC<{message:string}> = ({ message }) => (
  <Box className="empty-container">
    <img src={emptyImg} alt="empty Img" />
    <Typography variant="h5">
      {message}
    </Typography>
  </Box>
)

export default Empty
