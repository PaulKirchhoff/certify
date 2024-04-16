import {Flex} from "antd";
import {Exam, Exams} from "../domain/exam/types/Exams";
import {useLoaderData} from "react-router-dom";
import ExamNavigationButtonPanel from "../domain/exam/components/ExamNavigationButtonPanel";
import QuestionCard from "../domain/exam/components/QuestionCard";
import {useEffect, useState} from "react";
import {Question} from "../domain/exam/types/Question";
import Timer from "../domain/exam/components/Timer";

export async function loader({params}: any) {
  const exam: Exam = Exams.filter((e: Exam) => e.id === params.examId)[0];
  return { exam };
}
export default function ActiveExam() {

  const {exam} = useLoaderData() as {exam: Exam};

  const [activeQuestion, setActiveQuestion] = useState<Question>(exam.questions[0]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    setActiveQuestion(exam.questions[questionIndex]);
  }, [questionIndex]);

  return (
      <Flex vertical={true} justify={"space-between"} align={"center"} style={{height: '85vh'}}>
        <QuestionCard question={activeQuestion}/>
        <ExamNavigationButtonPanel
            questionIndex={questionIndex}
            setQuestionIndex={setQuestionIndex}
            questionsLength={exam.questions.length}
        >
          <Timer time={exam.time} />
        </ExamNavigationButtonPanel>
      </Flex>
  )
}
