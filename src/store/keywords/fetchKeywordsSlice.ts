import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Keywords } from '../../types/Keywords'
import { fetchKeywords } from '../../api/keywords/fetchKeywords'

interface FetchKeywordsState {
  keywords: Keywords[]
  isLoading: boolean
  error: string | null
}

const initialState: FetchKeywordsState = {
  keywords: [],
  isLoading: false,
  error: null,
}

export const fetchKeywordsThunk = createAsyncThunk(
  'defenses/keywords',
  async (_, thunkAPI) => {
    try {
      const keywords = await fetchKeywords()
      return keywords
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

const keywordsSlice = createSlice({
  name: 'keywordsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKeywordsThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchKeywordsThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.keywords = action.payload
      })
      .addCase(fetchKeywordsThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default keywordsSlice.reducer
