import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DegreeProgram } from '../../types/DegreeProgram'
import { fetchAllDegreeProgram } from '../../api/degreeProgramm/fetchAllDegreeProgramm'


interface FetchDegreeProgramState {
  degreeProgram: DegreeProgram[]
  isLoading: boolean
  error: string | null
}

const initialState: FetchDegreeProgramState = {
  degreeProgram: [],
  isLoading: false,
  error: null,
}

export const fetchDegreeProgramThunk = createAsyncThunk(
  'api/defenses/degreeProgram',
  async (_, thunkAPI) => {
    try {
      const degreeProgram = await fetchAllDegreeProgram()
      return degreeProgram
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

const fetchAllDegreeProgramSlice = createSlice({
  name: 'fetchAllDegreeProgram',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDegreeProgramThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchDegreeProgramThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.degreeProgram = action.payload
      })
      .addCase(fetchDegreeProgramThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default fetchAllDegreeProgramSlice.reducer
