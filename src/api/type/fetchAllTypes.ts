import { Type } from "../../types/Type";
import api from "../axios";

export async function fetchAllTypes() : Promise<Type[]> {
  const response = await api.get('/api/defenses/types');
  return response.data;
}
