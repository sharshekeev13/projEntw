// store/usersUpdateSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { updateUser } from '../../api/users/updateUser'
import { User } from '../../types/User'

interface UpdateState {
  isLoading: boolean
  error: string | null
}

const initialState: UpdateState = {
  isLoading: false,
  error: null,
}

export const updateUserThunk = createAsyncThunk(
  'users/update',
  async (payload: User, thunkAPI) => {
    try {
      const updatedUser = await updateUser(payload)
      return updatedUser
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

const usersUpdateSlice = createSlice({
  name: 'usersUpdate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(updateUserThunk.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default usersUpdateSlice.reducer
