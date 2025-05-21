import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Faculty } from '../../types/Faculty'
import { fetchAllFaculty } from '../../api/faculty/fetchAllFaculty'


interface FetchKeywordsState {
  faculty: Faculty[]
  isLoading: boolean
  error: string | null
}

const initialState: FetchKeywordsState = {
  faculty: [],
  isLoading: false,
  error: null,
}

export const fetchFacultyThunk = createAsyncThunk(
  'api/faculty',
  async (_, thunkAPI) => {
    try {
      const faculty = await fetchAllFaculty()
      return faculty
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

const fetchAllFacultySlice = createSlice({
  name: 'fetchAllFaculty',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFacultyThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchFacultyThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.faculty = action.payload
      })
      .addCase(fetchFacultyThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default fetchAllFacultySlice.reducer
