import {PieChartData} from "../types/PieChartData";
import {concat, difference, differenceWith, groupBy, isEqual, keys} from "lodash";
import {Answer} from "../../exam/types/Answer";
import {Question} from "../../exam/types/Question";
import {QuestionResult} from "../types/QuestionResult";
import {StackedBarChartData} from "../types/StackedBarChartData";

export const buildPieChartData = (examQuestions: any): PieChartData[] => {
  const categoryKeys: string[] = keys(examQuestions);
  return categoryKeys.map((key: string) => {
    return {
      name: key,
      value: (examQuestions[key].length)
    }
  })
}

export const buildStackedBarChartData = (examQuestions: Question[], activeExamQuestions: Question[]): StackedBarChartData[] => {
  const examQuestionsResult: QuestionResult[] = mapQuestionResult(examQuestions);
  const activeExamQuestionResult: QuestionResult[] = mapQuestionResult(activeExamQuestions, true);

  const wrongQuestions: QuestionResult[] = differenceWith(examQuestionsResult, activeExamQuestionResult, isEqual);
  const tempCorrectQuestions: QuestionResult[] = difference(examQuestionsResult, wrongQuestions);

  const correctQuestions: QuestionResult[] = tempCorrectQuestions.map((q: QuestionResult) => ({...q, isCorrect: true}));

  const questionResults: QuestionResult[] = concat(wrongQuestions, correctQuestions);

  const dictionary = groupBy(questionResults, 'category');
  const categoryNames: string[] = keys(dictionary);
  const stackedBarChartResultItems: StackedBarChartData[] = [];
  categoryNames.map((category: string) => {
    let chartCategory: StackedBarChartData = {
      category: category,
      correct: 0,
      wrong: 0
    }
    dictionary[category].map((q: QuestionResult) => {
      q.isCorrect ? chartCategory.correct = chartCategory.correct +1 : chartCategory.wrong = chartCategory.wrong +1;
      return chartCategory;
    })
    return stackedBarChartResultItems.push(chartCategory);
  })

  return stackedBarChartResultItems;
}

const mapQuestionResult = (questions: Question[], isUserSelection: boolean = false): QuestionResult[] => {
  return questions.map((q: Question) => {
    return {
      questionId: q.id,
      category: q.category || 'Others',
      answers: q.answers.filter((a: Answer) => isUserSelection ? a.isSelected : a.isCorrect).map((a: Answer) => a.id),
      isCorrect: false,
    }
  })
}
