export const isYourProfile = (paramsId:string | undefined, authId:number):boolean => {
  if (!paramsId || (paramsId && authId && parseInt(paramsId, 10) === authId)) {
    return true
  }
  return false
}
