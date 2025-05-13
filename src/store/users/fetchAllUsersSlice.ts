import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchListUsers } from '../../api/users/fetchListUsers'
import { User } from '../../types/User'

interface UsersState {
  users: User[]
  isLoading: boolean
  error: string | null
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
}

export const fetchAllUsersThunk = createAsyncThunk(
  'users/getAll',
  async (_, thunkAPI) => {
    try {
      const users = await fetchListUsers()
      console.log('Fetched users:', users) // Debugging line
      return users
    } catch (error: unknown) {
      let message = 'Unknown error'

      if (typeof error === 'object' && error !== null && 'response' in error) {
        const axiosError = error as { response?: { data?: { message?: string } } }
        message = axiosError.response?.data?.message || message
      }

      return thunkAPI.rejectWithValue(message)
    }
  }
)

const usersSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsersThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchAllUsersThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload
      })
      .addCase(fetchAllUsersThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default usersSlice.reducer
