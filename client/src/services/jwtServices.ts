import Cookies from 'universal-cookie';

const cookies = new Cookies();

export class JwtServices{
  private static token = "token";

  public static getToken(){
    return cookies.get(this.token)
  }

  public static setToken(accessToken:string){
    return  cookies.set(this.token, accessToken);
  }

  public static removeToken(){
    return cookies.remove(this.token)
  }

}