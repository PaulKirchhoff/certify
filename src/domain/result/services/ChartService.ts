import {PieChartData} from "../types/PieChartData";
import {differenceBy, differenceWith, isEqual, keys} from "lodash";
import {Answer} from "../../exam/types/Answer";
import {Question} from "../../exam/types/Question";

export const buildPieChartData = (examQuestions: any): PieChartData[] => {
  const categoryKeys: string[] = keys(examQuestions);
  return categoryKeys.map((key: string) => {
    return {
      name: key,
      value: (examQuestions[key].length)
    }
  })
  // console.log(sumBy(pieChartData.map(a => a.value)));
}

// export const buildStackedBarChartData = (examCorrectAnswers: SelectedAnswer[], activeExamSelectedAnswers: SelectedAnswer[]) => {

interface AI {
  name: string,
  wrong: number,
  correct: number
}
export const buildStackedBarChartData = (examQuestionsByCategory: any[], activeExamQuestionsByCategory: any) => {
  const examAnswersByCategories = mapObjects(examQuestionsByCategory);
  const activeExamAnswersByCategories = mapObjects(activeExamQuestionsByCategory, true);
// const compareAnswers1 = compareAnswers(examAnswersByCategories, activeExamAnswersByCategories);
  console.log("exam=", examAnswersByCategories)
  console.log("activeExam=", activeExamAnswersByCategories)
  // console.log("comp=", compareAnswers1)

  let a: AI[] = [];


  //TODO eine Ebene tiefer gehen und vergleichen. Dafür muss die Liste geflatted werden
  const differenceBy1 = differenceWith(examAnswersByCategories, activeExamAnswersByCategories, isEqual);
  console.log("differenceBY", differenceBy1);
  // examAnswersByCategories.map((examCategory) => {
  //   let b: AI = {
  //     name: '',
  //     wrong: 0,
  //     correct: 0
  //   };
  //   examCategory.map((entry: any) => {
  //     activeExamAnswersByCategories.map((activeExamCategory) => {
  //       activeExamCategory.map((activeEntry: any) => {
  //         if (entry.questionId === activeEntry.questionId) {
  //           b = {
  //             name: entry.name,
  //             wrong: b.wrong + checkCorrect(entry, activeEntry),
  //             correct: b.correct + checkCorrect(entry, activeEntry)
  //           }
  //         }
  //       })
  //       a.push(b);
  //     })
  //
  //   })
  //   console.log("AAAAAA", a)
  //   console.log("Category", examCategory)
  // })
}

const checkCorrect = (a: any[], b: any[]): number => {
  return a === b ? 1 : 0
}


const mapObjects = (questionsByCategories: any, isUserSelection: boolean = false) => {
  const categoryKeys: string[] = keys(questionsByCategories);
  return categoryKeys.map((key: any) => {
    return questionsByCategories[key].map((q: Question) => {
      return {
        name: key,
        answers: q.answers.filter((a: Answer) => isUserSelection ? a.isSelected : a.isCorrect).map((a: Answer) => (a.id)),
        questionId: q.id,
      }
    })
  })
}


function compareAnswers(list1: any[], list2: any[]) {
  const result = [];

  // Erstellen einer Map zur Zählung der Antworten für jede Frage
  const answerCountMap = new Map();

  // Durchlaufen der ersten Liste und Zählen der Antworten
  for (const item of list1) {
    console.log("ITEM", item)
    for (const answer of item.answers) {
      const key = `${item.name}-${item.questionId}-${answer}`;
      answerCountMap.set(key, (answerCountMap.get(key) || 0) + 1);
    }
  }

  // Durchlaufen der zweiten Liste und Vergleich der Antworten
  for (const item of list2) {
    const questionName = item.name;
    const questionId = item.questionId;
    const answers = item.answers;
    const questionKey = `${questionName}-${questionId}`;

    let correct = 0;
    let wrong = 0;

    for (const answer of answers) {
      const key = `${questionKey}-${answer}`;
      if (answerCountMap.has(key)) {
        correct += 1;
        answerCountMap.delete(key);
      } else {
        wrong += 1;
      }
    }

    // Hinzufügen der Ergebnisse zur Ergebnisliste
    result.push({ name: questionName, questionId, correct, wrong });
  }

  // Hinzufügen der übrig gebliebenen Antworten in answerCountMap (falsche Antworten in list2)
  answerCountMap.forEach((count, key) => {
    const [name, questionId, answer] = key.split("-");
    result.push({ name, questionId, correct: 0, wrong: count });
  });

  return result;
}

// Beispielaufruf
const list1 = [
  { name: 'Hooks', questionId: '1', answers: ['B'] },
  { name: 'Hooks', questionId: '5', answers: ['B'] },
  { name: 'Hooks', questionId: '9', answers: ['B'] },
  { name: 'Forms', questionId: '2', answers: ['B'] }
];

const list2 = [
  { name: 'Hooks', questionId: '1', answers: ['B'] },
  { name: 'Forms', questionId: '2', answers: ['B'] }
];

// const comparisonResult = compareAnswers(list1, list2);
// console.log("comparisonResult", comparisonResult);
