import { configureStore } from '@reduxjs/toolkit'
import usersCreateReducer from './users/createUserSlice'
import updateCreateReducer from './users/createUserSlice'
import fetchListUsersReducer from './users/fetchAllUsersSlice'
import fetchKeywordsReducer from './keywords/fetchKeywordsSlice'
import authReducer from './auth/authSlice'
import fetchAllFacultyReducer from './faculty/fetchAllFaculty'
import fetchAllDefensesReducer from './defenses/createDefenceSlice'
import fetchPagePersonsReducer from './person/fetchPersonSlice'
import fetchAllDegreeProgramReducer from './degreeProgramm/fetchAllDegreeProgramm'
import fetchAllTypeReducer from './type/fetchAllTypeSlice'
import fetchPageDefensesReducer from './defenses/fetchAllDefensesSlice'
import fetchGetDefenseByIdReducer from './defenses/fetchDefenceById'
import updateDefenseReducer from './defenses/fetchUpdateDefense'
import deleteDefenseReducer from './defenses/deleteDefenseSlice'

export const store = configureStore({
  reducer: {
    userCreate: usersCreateReducer,
    fetchAllUsers: fetchListUsersReducer,
    updateUser: updateCreateReducer,
    fetchKeywords: fetchKeywordsReducer,
    auth: authReducer,
    fetchAllFaculty: fetchAllFacultyReducer,
    fetchAllDefenses: fetchAllDefensesReducer,
    fetchPagePerson: fetchPagePersonsReducer,
    fetchAllDegreeProgram: fetchAllDegreeProgramReducer,
    fetchAllTypes : fetchAllTypeReducer,
    fetchPageDefenses: fetchPageDefensesReducer,
    fetchGetDefenseById: fetchGetDefenseByIdReducer,
    updateDefense: updateDefenseReducer,
    deleteDefense: deleteDefenseReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
