import { Faculty } from "./Faculty"

export interface Person {
  personId: number
  name: string
  surName: string
  personTitle: string
  isSupervisor: boolean
  anonymous: boolean
  faculty: Faculty
}