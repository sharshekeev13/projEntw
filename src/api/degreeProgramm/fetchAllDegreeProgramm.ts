import { DegreeProgram } from "../../types/DegreeProgram";
import api from "../axios";

export async function fetchAllDegreeProgram() : Promise<DegreeProgram[]> {
  const response = await api.get('/api/defenses/degreeProgram');
  return response.data;
}
