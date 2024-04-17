import {useRecoilValue} from "recoil";
import {ActiveExamState, activeExamState} from "../store/ActiveExamStore";
import {Flex} from "antd";
import Paragraph from "antd/es/typography/Paragraph";

export default function QuestionCardTitle() {
  const activeExam: ActiveExamState = useRecoilValue(activeExamState);

  return (
      <Flex vertical={false} align={"center"} justify={"space-between"}>
        <div>
          <h3 style={{marginBlockEnd: 0}}>{activeExam.examTitle}</h3>
          <Paragraph style={{textAlign: "left", fontWeight: "lighter"}}>
            {activeExam.questions[activeExam.currentQuestionIndex].category}
          </Paragraph>
        </div>
        <h3>{`${activeExam.currentQuestionIndex + 1} / ${activeExam.questions.length}`}</h3>
      </Flex>
  )
}
