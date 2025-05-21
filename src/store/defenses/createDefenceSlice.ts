import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Defense } from '../../types/Defense'
import type { DefenseDto } from '../../types/DefenseDto'
import api from '../../api/axios'
import { AxiosError } from 'axios'

interface DefenseState {
  creating: boolean
  createdDefense: Defense | null
  error: string | null
}

const initialState: DefenseState = {
  creating: false,
  createdDefense: null,
  error: null,
}

export const createDefense = createAsyncThunk<
  Defense,
  DefenseDto,
  { rejectValue: string }
>('defense/create', async (dto, { rejectWithValue }) => {
  try {
    const response = await api.post<Defense>('/api/defenses', dto)
    return response.data
  } catch (err: unknown) {
    console.error('Error creating defense:', err)
    const error = err as AxiosError<{ message?: string }>
    const message = error.response?.data?.message || 'Failed to create defense'
    return rejectWithValue(message)
  }
})

const defenseSlice = createSlice({
  name: 'defense',
  initialState,
  reducers: {
    clearCreatedDefense(state) {
      state.createdDefense = null
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDefense.pending, (state) => {
        state.creating = true
        state.error = null
        state.createdDefense = null
      })
      .addCase(createDefense.fulfilled, (state, action) => {
        state.creating = false
        state.createdDefense = action.payload
      })
      .addCase(createDefense.rejected, (state, action) => {
        state.creating = false
        state.error = action.payload || 'Unknown error'
      })
  },
})

export const { clearCreatedDefense } = defenseSlice.actions
export default defenseSlice.reducer
