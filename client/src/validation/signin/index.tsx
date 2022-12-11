import * as yup from 'yup'

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('enter correct email')
    .required('email is required'),
  password: yup
    .string()
    .min(6, 'password at least must be 6 character')
    .required('password is required'),
})
