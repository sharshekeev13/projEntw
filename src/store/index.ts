import { configureStore } from '@reduxjs/toolkit'
import usersCreateReducer from './users/createUserSlice'
import updateCreateReducer from './users/createUserSlice'
import fetchListUsersReducer from './users/fetchAllUsersSlice'

export const store = configureStore({
  reducer: {
    userCreate: usersCreateReducer,
    fetchAllUsers: fetchListUsersReducer,
    updateUser: updateCreateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
