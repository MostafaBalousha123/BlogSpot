import * as yup from 'yup'

export const validationSchema = yup.object({
  title: yup
    .string()
    .required('title is required'),
  image: yup
    .string()
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/, 'enter correct image')
    .required('image is required'),
  description: yup
    .string()
    .required('description is required'),
})
