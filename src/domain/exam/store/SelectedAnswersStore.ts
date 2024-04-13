import {atom, RecoilState} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();
interface SelectedAnswer {
  questionId: string;
  selectedAnswers: string[];
}
export const selectedAnswersState = atom<SelectedAnswer[]>({
  key: 'selectedAnswersState',
  default: [],
  effects_UNSTABLE: [persistAtom]
});
