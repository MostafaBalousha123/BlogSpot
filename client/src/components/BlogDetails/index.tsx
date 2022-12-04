import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import ApiService from '../../services/apiServices'
import { IBlogs } from '../../interfaces/IBlogs'

import './style.css'
import UserInfo from '../UserInfo'

const BlogDetails:FC = () => {
  const [blogInfo, setBlogInfo] = useState<IBlogs>()
  const { id } = useParams()
  useEffect(() => {
    (async () => {
      const result = await ApiService.get((`/api/v1/blogs/${id}`))
      if (result.status === 200) setBlogInfo(result.data)
    })()
  }, [])
  return (
    <Box>
      <Box>
        <Typography>title</Typography>
        <Typography>description</Typography>
        <UserInfo
          id={blogInfo?.userId}
          username={blogInfo?.user.username}
          profileImg={blogInfo?.user.profileImg}
          createdAt={blogInfo?.createdAt}
        />
      </Box>
    </Box>
  )
}

export default BlogDetails
