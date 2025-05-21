import api from "../axios";

export async function fetchDeleteDefense(id: number) {
  const response = await api.delete(`/api/defenses/${id}`);
  return response.data;
}
