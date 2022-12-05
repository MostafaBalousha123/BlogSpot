export interface IUser {
  id: number;
  username: string;
  email: string;
  bio:string;
  profileImg:string;
  createdAt: string;
  updatedAt: string;
}

export interface IGenericResponse {
  status: string;
  message: string;
}
