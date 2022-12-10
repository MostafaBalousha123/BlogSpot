import { Dispatch, SetStateAction } from 'react'
import { IPhotos } from '../IPhotos'

export interface IAddPhotos{
  open:boolean,
  handleClose:() => void,
  setNewPhoto:Dispatch<SetStateAction<IPhotos>>
}
