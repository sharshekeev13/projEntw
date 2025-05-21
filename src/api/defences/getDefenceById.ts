import { Defense } from "../../types/Defense";
import api from "../axios";

export async function fetchDefenseById(id: number): Promise<Defense> {
  const response = await api.get(`/api/defenses/${id}`);
  return response.data;
}
