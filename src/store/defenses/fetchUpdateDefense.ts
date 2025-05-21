// store/usersUpdateSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DefenseDto } from "../../types/DefenseDto";
import { updateDefense } from "../../api/defences/fetchUpdateDefense";
import { Defense } from "../../types/Defense";

interface UpdateState {
  defense: Defense;
  isLoading: boolean;
  error: string | null;
}

const initialState: UpdateState = {
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

export const updateDefenseThunk = createAsyncThunk<
  Defense,
  { id: number; payload: DefenseDto },
  { rejectValue: string }
>("defense/update", async ({ id, payload }, thunkAPI) => {
  try {
    const data = await updateDefense(payload, id);
    return data;
  } catch (error: unknown) {
    let message = "Unknown error";

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };
      message = axiosError.response?.data?.message || message;
    }

    return thunkAPI.rejectWithValue(message);
  }
});

const defenseUpdateSlice = createSlice({
  name: "defenseUpdate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateDefenseThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateDefenseThunk.fulfilled, (state, action) => {
        state.defense = action.payload;
        state.isLoading = false;
      })
      .addCase(updateDefenseThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default defenseUpdateSlice.reducer;
