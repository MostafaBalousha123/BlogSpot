import * as yup from 'yup'

export const validationSchema = yup.object({
  username: yup
    .string()
    .required('username is required'),
  email: yup
    .string()
    .email('enter correct email')
    .required('email is required'),
  password: yup
    .string()
    .min(6, 'password at least must be 6 character')
    .required('password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('confirm password is required'),
})
