import { Dispatch, SetStateAction } from 'react'
import { IPhotos } from '../IPhotos'

export interface IPhotoContainer {
  photos:IPhotos[],
  setPhotos:Dispatch<SetStateAction<IPhotos[]>>
}
