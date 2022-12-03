/* eslint-disable max-len */
import { FC } from 'react'
import { Box } from '@mui/material'
import { Masonry } from '@mui/lab'

const SuggestedPhotos:FC = () => (
  <Box>
    <h3>More Like this.</h3>
    <Box>
      <Masonry columns={3} spacing={2}>
        <Box>
          <img
            src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1000&auto=format"
            srcSet="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1000&auto=format&dpr=2 2x"
            alt="title"
            loading="lazy"
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: 'block',
              width: '100%',
            }}
          />
        </Box>

        <Box>
          <img
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=1000&auto=format"
            srcSet="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=1000&auto=format&dpr=2 2x"
            alt="title"
            loading="lazy"
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: 'block',
              width: '100%',
            }}
          />
        </Box>

        <Box>
          <img
            src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1000&auto=format"
            srcSet="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1000&auto=format&dpr=2 2x"
            alt="title"
            loading="lazy"
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: 'block',
              width: '100%',
            }}
          />
        </Box>

        <Box>
          <img
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=1000&auto=format"
            srcSet="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=1000&auto=format&dpr=2 2x"
            alt="title"
            loading="lazy"
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
      </Masonry>
    </Box>
  </Box>
)

export default SuggestedPhotos
