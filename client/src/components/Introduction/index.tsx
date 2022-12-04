/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Box } from '@mui/material'
import landing from '../../assets/image/landing.png'
import './style.css'

export const Introduction:FC = () => {
  const navigate = useNavigate()
  return (
    <section className="introduction">
      <Box className="get-started">
        <Box className="first">
          <Box className="brief-container">
            <h1>
              mostafa blogs hhh
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              , nesciunt rem expedita sit praesentium doloremque voluptatem voluptas
              , officiis numquam laudantium laboriosam nam similique repellat
              , enim necessitatibus rerum perferendis quae. Delectus?
            </p>
            <Button onClick={() => {
              navigate('/blogs')
            }}
            >
              Get Start
            </Button>
          </Box>

          <Box className="statistics-container">
            <p>
              <span>50</span>
              posts
            </p>
            <p>
              <span>150</span>
              Photos
            </p>

            <p>
              <span>80</span>
              users
            </p>
          </Box>
        </Box>

        <Box className="image-container">
          <img src={landing} alt="" />
        </Box>
      </Box>
    </section>

  )
}
