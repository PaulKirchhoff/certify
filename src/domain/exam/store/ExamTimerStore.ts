import {atom, RecoilState} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist({key: 'examTimer'});

export const examTimerState: RecoilState<number> = atom({
  key: 'value',
  default: 0,
  effects_UNSTABLE: [persistAtom]
})
