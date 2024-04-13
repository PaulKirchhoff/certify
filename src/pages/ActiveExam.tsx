import {Button, Card, Flex} from "antd";
import {Exam, Exams} from "../domain/exam/types/Exams";
import {useLoaderData} from "react-router-dom";
import {FaArrowCircleLeft} from "react-icons/fa";
import ExamNavigationButtonPanel from "../domain/exam/components/ExamNavigationButtonPanel";
import QuestionCard from "../domain/exam/components/QuestionCard";
import {useEffect, useState} from "react";
import {Question} from "../domain/exam/types/Question";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {activeExamState} from "../domain/exam/store/ActiveExamStore";
import {selectedAnswersState} from "../domain/exam/store/SelectedAnswersStore";
import Timer from "../domain/exam/components/Timer";

export async function loader({params}: any) {
  const exam: Exam = Exams.filter((e: Exam) => e.id === params.examId)[0];
  return { exam };
}
export default function ActiveExam() {

  const {exam} = useLoaderData() as {exam: Exam};

  const activeExam = useRecoilValue(activeExamState);
  const setActiveExamState = useSetRecoilState(activeExamState);

  const [activeQuestion, setActiveQuestion] = useState<Question>(exam.questions[0]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    // setActiveExamState({...activeExam, currentQuestionId: activeQuestion.id})
    setActiveQuestion(exam.questions[questionIndex]);
  }, [questionIndex]);

  return (
      <Flex vertical={true} justify={"space-between"} align={"center"} style={{height: '85vh'}}>
        <QuestionCard question={activeQuestion} index={questionIndex}/>
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
