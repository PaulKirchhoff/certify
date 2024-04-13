import {recoilPersist} from "recoil-persist";
import {atom, RecoilState} from "recoil";

const {persistAtom} = recoilPersist();

export interface QuestionState {
  questionId: string,
  givenAnswerIds: string[],
}

export interface ActiveExamState {
  examId?: string,
  examTitle: string,
  questionStates?: QuestionState[],
  currentQuestionId?: string
}

export const activeExamState: RecoilState<ActiveExamState> = atom({
  key: 'ActiveExam',
  default: {
    examId: '',
    examTitle: '',
    questionStates: [] as QuestionState[],
    currentQuestionId: '',
  } as ActiveExamState,
  effects_UNSTABLE: [persistAtom]
})
