export interface IUser {
  id: string;
  name: string;
  email: string;
  profileImg:string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGenericResponse {
  status: string;
  message: string;
}
