import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../hooks/user/userSlice'

export default configureStore({
  reducer: {
    user: userSlice,
  },
})
