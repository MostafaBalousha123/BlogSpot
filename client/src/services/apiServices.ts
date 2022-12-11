import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { JwtServices } from './jwtServices'

class ApiService {
  private static axios = axios

  public static init(): void {
    const API_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL
      : 'http://localhost:8080'
    this.axios.defaults.baseURL = API_URL
    this.axios.interceptors.response.use((res) => res, (err) => {
      if (err?.response?.status >= 400 && err?.response?.status < 500
        && err?.response?.status !== 401 && err.config.url !== '/api/v1/users/me') {
        toast.error(err?.response?.data?.message)
      }
      return Promise.reject(err)
    })
  }

  public static setHeader(): void {
    this.axios
      .defaults.headers.common.Authorization = `Bearer ${JwtServices.getToken()}`
    this.axios.defaults.headers.common.Accept = 'application/json'
    this.axios.defaults.headers.common['Content-Type'] = 'application/json'
  }

  public static get(resource:string, config?:AxiosRequestConfig)
  :Promise<AxiosResponse> {
    return this.axios.get(resource, config)
  }

  public static post(resource:string, body:any, config?:AxiosRequestConfig)
  :Promise<AxiosResponse> {
    return this.axios.post(resource, body, config)
  }

  public static patch(resource:string, body:any, config?:AxiosRequestConfig)
  :Promise<AxiosResponse> {
    return this.axios.patch(resource, body, config)
  }

  public static put(resource:string, body:any, config?:AxiosRequestConfig)
  :Promise<AxiosResponse> {
    return this.axios.put(resource, body, config)
  }

  public static delete(resource:string, config?:AxiosRequestConfig)
  :Promise<AxiosResponse> {
    return this.axios.delete(resource, config)
  }
}

export default ApiService
