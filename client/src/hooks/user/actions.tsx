import { JwtServices } from '../../services/jwtServices'
import ApiService from '../../services/apiServices'

export const auth = {
  signin: async (payload:object):Promise<any> => {
    try {
      const user = await ApiService.post('/api/v1/auth/signin', payload)
      JwtServices.setToken(user.data.access_token)
      return user
    } catch (err) {
      console.log(err)
    }
    return {}
  },
  signup: async (payload:object):Promise<void> => {
    try {
      const user = await ApiService.post('/api/v1/auth/signup', payload)
      JwtServices.setToken(user.data.access_token)
    } catch (err) {
      console.log(err)
    }
  },
  logout: () => {
    JwtServices.removeToken()
  },

}
