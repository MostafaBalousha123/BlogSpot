export const isYourProfile = (paramsId:string | undefined, authId:number):boolean => {
  if ((paramsId && authId && parseInt(paramsId, 10) === authId)) {
    return true
  }
  return false
}
