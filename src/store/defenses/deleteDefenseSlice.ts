import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDeleteDefense } from '../../api/defences/deleteDefense';

interface DeleteDefenseState {
  deleting: boolean;
  success: boolean;
  error: string | null;
}

const initialState: DeleteDefenseState = {
  deleting: false,
  success: false,
  error: null,
};

// Async thunk
export const deleteDefenseThunk = createAsyncThunk<
  void,         // return type
  number,       // argument (id)
  { rejectValue: string } // error type
>('defense/delete', async (id, thunkAPI) => {
  try {
    await fetchDeleteDefense(id);
  } catch (error: unknown) {
    let message = 'Unbekannter Fehler';

    if (typeof error === 'object' && error !== null && 'response' in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      message = axiosError.response?.data?.message || message;
    }

    return thunkAPI.rejectWithValue(message);
  }
});

const deleteDefenseSlice = createSlice({
  name: 'deleteDefense',
  initialState,
  reducers: {
    resetDeleteState(state) {
      state.deleting = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteDefenseThunk.pending, (state) => {
        state.deleting = true;
        state.success = false;
        state.error = null;
      })
      .addCase(deleteDefenseThunk.fulfilled, (state) => {
        state.deleting = false;
        state.success = true;
        state.error = null;
      })
      .addCase(deleteDefenseThunk.rejected, (state, action) => {
        state.deleting = false;
        state.success = false;
        state.error = action.payload || 'Unbekannter Fehler';
      });
  },
});

export const { resetDeleteState } = deleteDefenseSlice.actions;
export default deleteDefenseSlice.reducer;
