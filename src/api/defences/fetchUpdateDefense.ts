import { Defense } from "../../types/Defense";
import { DefenseDto } from "../../types/DefenseDto";
import api from "../axios";

export async function updateDefense(payload: DefenseDto, id: number): Promise<Defense> {
  const response = await api.put(`/api/defenses/${id}`, payload);
  return response.data;
}