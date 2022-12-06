export interface IPhotos{
  id:number
  title: string
  image: string
  userId: number
  createdAt: string
  updatedAt: string
  user: {
        username:string
        profileImg:string
  }
}
