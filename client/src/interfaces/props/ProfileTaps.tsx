import { Dispatch, SetStateAction } from 'react'
import { IBlogs } from '../IBlogs'
import { IPhotos } from '../IPhotos'

export interface IProfileTaps{
  blogs:IBlogs[],
  photos:IPhotos[],
  setPhotos:Dispatch<SetStateAction<IPhotos[]>>

}
