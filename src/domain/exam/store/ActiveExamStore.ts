import {recoilPersist} from "recoil-persist";
import {atom, RecoilState} from "recoil";

const {persistAtom} = recoilPersist();

export interface QuestionState {
  questionId: string,
  givenAnswerIds: string[],
}

export interface ActiveExamState {
  examId?: string,
  questionStates?: QuestionState[],
  currentQuestionId?: string
  timer?: number
}

export const activeExamState: RecoilState<ActiveExamState> = atom({
  key: 'ActiveExam',
  default: {
    examId: '',
    questionStates: [] as QuestionState[],
    currentQuestionId: '',
    timer: 0
  } as ActiveExamState,
  effects_UNSTABLE: [persistAtom]
})
