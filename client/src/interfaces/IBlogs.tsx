export interface IBlogs{
  id: number
  title: string
  content: string
  image: string
  userId: number
  createdAt: string
  updatedAt: string
  user: {
        username:string
        profileImg:string
  }
}
