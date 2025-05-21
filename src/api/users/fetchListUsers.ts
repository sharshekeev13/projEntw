import { User } from "../../types/User";
import api from "../axios";

export async function fetchListUsers() : Promise<User[]> {
  const response = await api.get('/api/users');
  return response.data;
}
