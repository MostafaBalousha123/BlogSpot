import Cookies from 'universal-cookie'

const cookies = new Cookies()

export class JwtServices {
  private static token = 'token'

  public static getToken():any {
    return cookies.get(this.token)
  }

  public static setToken(accessToken:string):any {
    return cookies.set(this.token, accessToken)
  }

  public static removeToken() :any {
    return cookies.remove(this.token)
  }
}
