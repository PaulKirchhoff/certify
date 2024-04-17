import {Flex} from "antd";
import {Exam, Exams} from "../domain/exam/types/Exams";
import {useLoaderData} from "react-router-dom";
import ExamNavigationButtonPanel from "../domain/exam/components/ExamNavigationButtonPanel";
import QuestionCard from "../domain/exam/components/QuestionCard";
import Timer from "../domain/exam/components/Timer";
import {useRecoilValue} from "recoil";
import {ActiveExamState, activeExamState} from "../domain/exam/store/ActiveExamStore";

export async function loader({params}: any) {
  const exam: Exam = Exams.filter((e: Exam) => e.id === params.examId)[0];
  return { exam };
}
export default function ActiveExam() {

  const {exam} = useLoaderData() as {exam: Exam};
  const activeExam = useRecoilValue<ActiveExamState>(activeExamState);

  return (
      <Flex vertical={true} justify={"space-between"} align={"center"} style={{height: '85vh'}}>
        <QuestionCard question={activeExam.questions[activeExam.currentQuestionIndex]}/>
        <ExamNavigationButtonPanel>
          <Timer time={exam.time} />
        </ExamNavigationButtonPanel>
      </Flex>
  )
}
