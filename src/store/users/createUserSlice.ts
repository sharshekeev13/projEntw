import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserCreate } from '../../types/userCreate'
import { createUser } from '../../api/users/createUser'

interface UsersState {
  isLoading: boolean
  error: string | null
}

const initialState: UsersState = {
  isLoading: false,
  error: null,
}

export const createUserThunk = createAsyncThunk(
  'users/createUser',
  async (payload: UserCreate, thunkAPI) => {
    try {
      const response = await createUser(payload)
      return response
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


const createUserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(createUserThunk.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(createUserThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default createUserSlice.reducer
