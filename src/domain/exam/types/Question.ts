import { Answer } from "./Answer"

export enum QuestionType {
  MULTIPLE_CHOICE = 1,
  SELECT = 2
}

export interface Question {
  id: string,
  question: string,
  type: QuestionType
  points: number,
  answers: Answer[]
}
