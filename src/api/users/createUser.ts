import { UserCreate } from "../../types/userCreate";
import api from "../axios";

export async function createUser(payload: UserCreate) {
  const response = await api.post('/api/users/create', payload);
  return response.data;
}