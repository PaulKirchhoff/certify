import {atom, RecoilState} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist({key: 'examTimer'});

export interface ExamTimerState {
  timer: number
}
export const examTimerState: RecoilState<ExamTimerState> = atom({
  key: 'ExamTimer',
  default: {
    timer: 0
  } as ExamTimerState,
  effects_UNSTABLE: [persistAtom]
})
