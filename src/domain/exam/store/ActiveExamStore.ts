import {recoilPersist} from "recoil-persist";
import {atom, RecoilState} from "recoil";
import {Question} from "../types/Question";

const {persistAtom} = recoilPersist({key: 'activeExam'});

export interface ActiveExamState {
  examId?: string,
  examTitle: string,
  currentQuestionIndex: number,
  questions: Question[],
}

export const activeExamState: RecoilState<ActiveExamState> = atom({
  key: 'ActiveExam',
  default: {
    examId: '',
    examTitle: '',
    currentQuestionIndex: 0,
    questions: []
  } as ActiveExamState,
  effects_UNSTABLE: [persistAtom]
})
