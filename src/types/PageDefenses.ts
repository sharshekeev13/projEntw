import { Defense } from "./Defense"
import { Pageable, Sort } from "./Pageable"

export interface PageDefenses {
  totalElements: number
  totalPages: number
  first: boolean
  last: boolean
  size: number
  content: Defense[]
  number: number
  sort: Sort
  numberOfElements: number
  pageable: Pageable
  empty: boolean
}
