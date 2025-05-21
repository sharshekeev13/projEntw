import { PageDefenses } from "../../types/PageDefenses";
import api from "../axios";


export interface GetDefenseParams {
    page?: number
    pageElements?: number
    from? : string
    to? : string
    start? : string
    end? : string
    type: string
    degreeProgram?: string
    faculty?: string
    keywords? : string[]
    searchString?: string
}

export async function fetchAllDefenses(params : GetDefenseParams) : Promise<PageDefenses> {
  const response = await api.get('/api/defenses/filter', {
    ...(params && {params})
  }
  );
  return response.data;
}
