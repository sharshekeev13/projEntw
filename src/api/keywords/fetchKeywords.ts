import { Keywords } from "../../types/Keywords";
import api from "../axios";

export async function fetchKeywords() : Promise<Keywords[]> {
  const response = await api.get('/defenses/keyword');
  return response.data;
}
