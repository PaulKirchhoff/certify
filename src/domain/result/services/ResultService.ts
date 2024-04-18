import {SelectedAnswer} from "../../exam/store/SelectedAnswersStore";
import {Question} from "../../exam/types/Question";
import {Answer} from "../../exam/types/Answer";
import {groupBy} from "lodash";

export const getCorrectAnswersFromExamQuestions = (questions: Question[]): SelectedAnswer[] => {
  return questions.map((q: Question) => {
    return {
      questionId: q.id,
      selectedAnswers: q.answers.filter(
          (a: Answer) => a.isCorrect)
          .map((a: Answer) => {
            return a.id
          })
    }
  })
}

export const getCorrectAnswersFromActiveExamQuestions = (questions: Question[]): SelectedAnswer[] => {
  return questions.map((q: Question) => {
    return {
      questionId: q.id,
      selectedAnswers: q.answers.filter(
          (a: Answer) => a.isSelected)
          .map((a: Answer) => {
            return a.id
          })
    }
  })
}

export const getQuestionsByCategory = (questions: Question[]): any => {
  return groupBy(questions, 'category');
}
