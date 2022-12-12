import { Dispatch, SetStateAction } from 'react'
import { IPhotos } from '../IPhotos'

export interface IEditPhotos{
  open:boolean,
  handleClose:() => void,
  setUpdatedPhoto:Dispatch<SetStateAction<Partial<IPhotos>>>,
  imgInfo:Partial<IPhotos>
}
