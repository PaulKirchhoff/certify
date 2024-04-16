import {atom, RecoilState} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist({key: 'selectedAnswers'});
export interface SelectedAnswer {
  questionId: string;
  selectedAnswers: string[];
}
export const selectedAnswersState: RecoilState<SelectedAnswer[]> = atom<SelectedAnswer[]>({
  key: 'selectedAnswersState',
  default: [],
  effects_UNSTABLE: [persistAtom]
});
