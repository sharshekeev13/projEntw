import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
})

// Request interceptor (тот же, без изменений)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

    // 🔐 Обработка 401 Unauthorized — попытка обновить токен
    if (
      error.response?.status === 403 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      const refreshToken = {
        refreshToken: localStorage.getItem('refreshToken'),
      }
      if (refreshToken) {
        try {
          const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, refreshToken)

          const { token: newToken, refreshToken: newRefreshToken } = res.data

          localStorage.setItem('token', newToken)
          localStorage.setItem('refreshToken', newRefreshToken)

          originalRequest.headers.Authorization = `Bearer ${newToken}`

          return api(originalRequest)
        } catch (refreshError) {
          localStorage.clear()
          window.location.href = '/'
          return Promise.reject(refreshError)
        }
      }
    }

    return Promise.reject(error)
  }
)


export default api
