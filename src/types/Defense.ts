import { DegreeProgram } from "./DegreeProgram"
import { Faculty } from "./Faculty"
import { Person } from "./Person"
import { Type } from "./Type"

export interface Defense {
  id: number
  defenseDate: string
  time: string
  room: string
  author: Person
  topic: string
  degreeProgram: DegreeProgram
  type: Type
  faculty: Faculty
  supervisor: Person
  publicDefense: boolean
  date: string
}
