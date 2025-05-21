import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'
import api from '../../api/axios'
import { AuthResponse } from '../../types/AuthResponse'


interface AuthState {
  token: string | null
  refreshToken: string | null
  userId: number | null
  role: string | null
  loading: boolean
  error: string | null
}

const loadFromStorage = (): AuthState => ({
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refreshToken'),
  userId: localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null,
  role: localStorage.getItem('role'),
  loading: false,
  error: null,
})

const initialState: AuthState = loadFromStorage()

// 🔐 Логин с FormData
export const login = createAsyncThunk<
  AuthResponse,
  { username: string; password: string },
  { rejectValue: string }
>('auth/login', async ({ username, password }, { rejectWithValue }) => {
  try {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    const response = await api.post<AuthResponse>('/auth/sing-in', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response.data
  } catch (err: unknown) {
    const error = err as AxiosError<{ message: string }>
    return rejectWithValue(error.response?.data?.message || 'Login failed')
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.refreshToken = null
      state.userId = null
      state.role = null
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('userId')
      localStorage.removeItem('role')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        const { token, refreshToken, userId, role } = action.payload

        state.loading = false
        state.token = token
        state.refreshToken = refreshToken
        state.userId = userId
        state.role = role

        // 💾 Сохраняем в localStorage
        localStorage.setItem('token', token)
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('userId', userId.toString())
        localStorage.setItem('role', role)
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Login failed'
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
