import {recoilPersist} from "recoil-persist";
import {atom, RecoilState} from "recoil";
import {Question} from "../types/Question";
import {Answer} from "../types/Answer";

const {persistAtom} = recoilPersist({key: 'activeExam'});

export interface ActiveExamState {
  examId?: string,
  examTitle: string,
  currentQuestionId?: string
  currentQuestionIndex: number,
  questions: Question[],
}

export const activeExamState: RecoilState<ActiveExamState> = atom({
  key: 'ActiveExam',
  default: {
    examId: '',
    examTitle: '',
    currentQuestionId: '',
    currentQuestionIndex: 0,
    questions: []
  } as ActiveExamState,
  effects_UNSTABLE: [persistAtom]
})
