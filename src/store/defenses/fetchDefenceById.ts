import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Defense } from "../../types/Defense";
import { fetchDefenseById } from "../../api/defences/getDefenceById";

interface FetchGetDefenseByIdState {
  defense: Defense;
  isLoading: boolean;
  error: string | null;
}

const initialState: FetchGetDefenseByIdState = {
  defense: {
    id: 0,
    defenseDate: "",
    time: "",
    room: "",
    author: {
      personId: 0,
      name: "",
      surName: "",
      personTitle: "",
      isSupervisor: false,
      anonymous: false,
      faculty: {
        facultyId: 0,
        facultyName: "",
        facultyAbbreviation: "",
      },
    },
    topic: "",
    degreeProgram: {
        degreeProgramName: "",
        id: 0,
    },
    type: {
      typeName: "",
        id: 0,
    },
    faculty: {
        facultyId: 0,
        facultyName: "",
        facultyAbbreviation: "",
    },
    supervisor: {
      personId: 0,
      name: "",
      surName: "",
      personTitle: "",
      isSupervisor: false,
      anonymous: false,
      faculty: {
        facultyId: 0,
        facultyName: "",
        facultyAbbreviation: "",
      },
    },
    publicDefense: false,
    date: "",

  },
  isLoading: false,
  error: null,
};


export const fetchGetDefenseByIdThunk = createAsyncThunk<
    Defense,
    number,
  { rejectValue: string }
>("defenses/fetchById", async (id, thunkAPI) => {
  try {
    const data = await fetchDefenseById(id);
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

const fetchGetDefenseByIdSlice = createSlice({
  name: "fetchGetDefenseById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetDefenseByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGetDefenseByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.defense = action.payload;
      })
      .addCase(fetchGetDefenseByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unbekannter Fehler";
      });
  },
});

export default fetchGetDefenseByIdSlice.reducer;
