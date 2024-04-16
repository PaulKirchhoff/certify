import {SelectedAnswer} from "../../exam/store/SelectedAnswersStore";
import {Question} from "../../exam/types/Question";
import {Answer} from "../../exam/types/Answer";
import {Exam} from "../../exam/types/Exams";
import {sortBy} from "lodash";

export const getCorrectAnswersFromExam = (exam: Exam): SelectedAnswer[] => {
  return exam.questions.map((q: Question) => {
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

export const getSelectedAnswers = (selectedAnswersRef: SelectedAnswer[]): SelectedAnswer[] => {
  return selectedAnswersRef.map((sa: SelectedAnswer) => {
    return {
      questionId: sa.questionId,
      selectedAnswers: sortBy(sa.selectedAnswers)
    }
  });
}
