import {Flex} from "antd";
import {Exam, Exams} from "../domain/exam/types/Exams";
import {useLoaderData} from "react-router-dom";
import ExamNavigationButtonPanel from "../domain/exam/components/ExamNavigationButtonPanel";
import QuestionCard from "../domain/exam/components/QuestionCard";
import Timer from "../domain/exam/components/Timer";

export async function loader({params}: any) {
  const exam: Exam = Exams.filter((e: Exam) => e.id === params.examId)[0];
  return { exam };
}
export default function ActiveExam() {

  const {exam} = useLoaderData() as {exam: Exam};

  return (
      <Flex vertical={true} justify={"space-between"} align={"center"} style={{height: '85vh'}}>
        <QuestionCard />
        <ExamNavigationButtonPanel>
          <Timer time={exam.time} />
        </ExamNavigationButtonPanel>
      </Flex>
  )
}
