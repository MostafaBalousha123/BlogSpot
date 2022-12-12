import { Dispatch, SetStateAction } from 'react'
import { IPhotos } from '../IPhotos'

export interface IPhotoDetails {
  imgInfo:IPhotos,
  handleClose:any,
  open:boolean,
  setDeletedIds:Dispatch<SetStateAction<number[]>>
  setUpdatedPhoto:Dispatch<SetStateAction<Partial<IPhotos>>>
  updatedPhoto:Partial<IPhotos>
}
