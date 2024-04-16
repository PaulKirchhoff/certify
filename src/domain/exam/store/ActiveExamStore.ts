import {recoilPersist} from "recoil-persist";
import {atom, RecoilState} from "recoil";

const {persistAtom} = recoilPersist({key: 'activeExam'});

export interface ActiveExamState {
  examId?: string,
  examTitle: string,
  currentQuestionId?: string
}

export const activeExamState: RecoilState<ActiveExamState> = atom({
  key: 'ActiveExam',
  default: {
    examId: '',
    examTitle: '',
    currentQuestionId: '',
  } as ActiveExamState,
  effects_UNSTABLE: [persistAtom]
})
