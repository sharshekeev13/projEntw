import { Faculty } from "../../types/Faculty";
import api from "../axios";

export async function fetchAllFaculty() : Promise<Faculty[]> {
  const response = await api.get('/api/faculty');
  return response.data;
}
