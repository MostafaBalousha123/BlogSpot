import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/IUser'

interface IUserState {
  user: IUser | null;
  isAuthenticated: boolean,
}

const initialState: IUserState = {
  user: null,
  isAuthenticated: false,

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
