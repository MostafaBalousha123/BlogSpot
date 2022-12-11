/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-danger */
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress, Typography } from '@mui/material'
import ApiService from '../../services/apiServices'
import { IBlogs } from '../../interfaces/IBlogs'

import './style.css'
import UserInfo from '../UserInfo'

const BlogDetails:FC = () => {
  const [blogInfo, setBlogInfo] = useState<IBlogs>()
  const [loader, setLoader] = useState<boolean>(true)

  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const result = await ApiService.get((`/api/v1/blogs/${id}`))
      if (result.status === 200) {
        setBlogInfo(result.data)
        setLoader(false)
      }
    })()
  }, [])
  const createMarkup = ():any => ({ __html: blogInfo?.content })

  if (loader) {
    return (
      <CircularProgress
        sx={{
          margin: '250px auto',
          display: 'block',
        }}
        color="secondary"
      />
    )
  }
  return (
    <Box className="blog-details">
      <Box className="blog-header">
        <Typography className="blog-header-title" variant="h2">{blogInfo?.title}</Typography>
        <Typography className="blog-header-description" variant="body1">
          {blogInfo?.description}
        </Typography>
        <Box className="blog-header-user-info">
          <UserInfo
            id={blogInfo?.userId}
            username={blogInfo?.user.username}
            profileImg={blogInfo?.user.profileImg}
            createdAt={blogInfo?.createdAt}
          />
        </Box>
        <img className="blog-img" src={blogInfo?.image} alt={blogInfo?.title} />
      </Box>
      <Box className="content">
        <Box dangerouslySetInnerHTML={createMarkup()} />
      </Box>
    </Box>
  )
}

export default BlogDetails
