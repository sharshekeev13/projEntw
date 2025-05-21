import { Pageable, Sort } from "./Pageable"
import { Person } from "./Person"

export interface PagePerson {
  totalElements: number
  totalPages: number
  first: boolean
  last: boolean
  size: number
  content: Person[]
  number: number
  sort: Sort
  numberOfElements: number
  pageable: Pageable
  empty: boolean
}
