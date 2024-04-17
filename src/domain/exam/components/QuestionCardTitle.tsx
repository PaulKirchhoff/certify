import {useRecoilValue} from "recoil";
import {ActiveExamState, activeExamState} from "../store/ActiveExamStore";
import {Flex} from "antd";

export default function QuestionCardTitle() {
  const activeExam: ActiveExamState = useRecoilValue(activeExamState);

  return (
      <Flex vertical={false} justify={"space-between"}>
        <h3>{activeExam.examTitle}</h3>
        <h3>{`${activeExam.currentQuestionIndex + 1} / ${activeExam.questions.length}`}</h3>
      </Flex>
  )
}
