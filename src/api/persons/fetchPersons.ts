import api from "../axios";
import { PagePerson } from "../../types/PagePerson";


interface PersonFilterParams {
  fullName?: string
  facultyId?: string
  page?: number
  size?: number
}

export async function fetchPagePerson(params? : PersonFilterParams) : Promise<PagePerson> {
  const response = await api.get('/api/person/filter', {
    ...(params && {params})
  });
  return response.data;
}
