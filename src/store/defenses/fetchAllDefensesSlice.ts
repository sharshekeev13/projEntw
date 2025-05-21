import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllDefenses,
  GetDefenseParams,
} from "../../api/defences/fetchAllDefences";
import { PageDefenses } from "../../types/PageDefenses";

interface FetchPageDefensesState {
  defenses: PageDefenses;
  isLoading: boolean;
  error: string | null;
}

const initialState: FetchPageDefensesState = {
  defenses: {
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
};

export const fetchPageDefensesThunk = createAsyncThunk<
  PageDefenses,
  GetDefenseParams,
  { rejectValue: string }
>("defenses/fetchPage", async (params, thunkAPI) => {
  try {
    const data = await fetchAllDefenses(params);
    return data;
  } catch (error: unknown) {
    let message = "Unbekannter Fehler";
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };
      message = axiosError.response?.data?.message || message;
    }
    console.error("Error fetching defenses:", message);
    return thunkAPI.rejectWithValue(message);
  }
});

const fetchPageDefensesSlice = createSlice({
  name: "fetchPageDefenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageDefensesThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPageDefensesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.defenses = action.payload;
      })
      .addCase(fetchPageDefensesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unbekannter Fehler";
      });
  },
});

export default fetchPageDefensesSlice.reducer;
