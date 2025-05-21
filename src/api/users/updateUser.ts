import api from '../axios'
import { User } from '../../types/User'

export async function updateUser({userId, ...data} : User) {
  const response = await api.put(`/api/users/${userId}`, data)
  return response.data
}