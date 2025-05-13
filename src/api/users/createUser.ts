import { UserCreate } from "../../types/userCreate";
import api from "../axios";

export async function createUser(payload: UserCreate) {
  const response = await api.post('/users/create', payload);
  return response.data;
}