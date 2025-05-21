import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PagePerson } from '../../types/PagePerson'
import { fetchPagePerson } from '../../api/persons/fetchPersons'


interface FetchPersonPageState {
  persons: PagePerson
  isLoading: boolean
  error: string | null
}

const initialState: FetchPersonPageState = {
  persons: {
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: true,
    size: 10,
    content: [],
    number: 0,
    sort: {
      empty: true,
      unsorted: true,
      sorted: false,
    },
    numberOfElements: 0,
    pageable: {
      offset: 0,
      sort: {
        empty: true,
        unsorted: true,
        sorted: false,
      },
      unpaged: false,
      paged: true,
      pageNumber: 0,
      pageSize: 10,
    },
    empty: true,
  },
  isLoading: false,
  error: null,
}

export const fetchPersonThunk = createAsyncThunk(
  'api/person/filtered',
  async (params: {fullName? : string}, thunkAPI) => {
    try {
      const faculty = await fetchPagePerson(params)
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

const fetchPagePersonsSlice = createSlice({
  name: 'fetchPagePersons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchPersonThunk.fulfilled, (state, action) => {
        state.isLoading = false
        state.persons = action.payload
      })
      .addCase(fetchPersonThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export default fetchPagePersonsSlice.reducer
