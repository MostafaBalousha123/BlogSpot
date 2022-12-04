import { TextField } from '@mui/material'

import { styled } from '@mui/material/styles'

export const styledComponents = {
  CustomTextField: styled(TextField)({
    '& label.Mui-focused': {
      color: '#2563EB  !important',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'primary',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e5e7ebdd',
        color: 'withe',
      },
      '&:hover fieldset': {
        borderColor: '#2563EB ',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary',
        color: 'withe',

      },
    },
  }),
}
