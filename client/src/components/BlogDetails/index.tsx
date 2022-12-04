import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApiService from '../../services/apiServices'
import { IBlogs } from '../../interfaces/IBlogs'

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
    <div>{blogInfo?.title}</div>
  )
}

export default BlogDetails
