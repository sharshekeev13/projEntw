import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllTypes } from '../../api/type/fetchAllTypes'
import { Type } from '../../types/Type'


interface FetchTypesState {
  types: Type[]
  isLoading: boolean
  error: string | null
}

const initialState: FetchTypesState = {
  types: [],
  isLoading: false,
  error: null,
}

export const fetchTypeThunk = createAsyncThunk(
  'api/defenses/types',
  async (_, thunkAPI) => {
    try {
      const types = await fetchAllTypes()
      return types
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

const fetchAllTypeSlice = createSlice({
  name: 'fetchAllFaculty',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypeThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchTypeThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.types = action.payload
      })
      .addCase(fetchTypeThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default fetchAllTypeSlice.reducer
