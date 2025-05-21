
export interface Sort {
  empty: boolean
  unsorted: boolean
  sorted: boolean
}

export interface Pageable {
  offset: number
  sort: Sort
  unpaged: boolean
  paged: boolean
  pageNumber: number
  pageSize: number
}