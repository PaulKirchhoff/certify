import {Flex} from "antd";
import {useRecoilValue} from "recoil";
import {activeExamState, QuestionState} from "../domain/exam/store/ActiveExamStore";
import {useEffect, useState} from "react";
import {Exam, Exams} from "../domain/exam/types/Exams";
import {Answer} from "../domain/exam/types/Answer";

export default function ExamResult() {

  const activeExam = useRecoilValue(activeExamState);
  const [examPercentResult, setExamPercentResult] = useState(0);

  useEffect(() => {
    const exam: Exam | undefined = Exams.find((e: Exam) => e.id === activeExam.examId);
    if(exam) {
      const map = exam.questions.map((q) => q.answers.filter((a) => a.isCorrect).map((a) => a.id));
      console.log("Map,", map)
      const givenAnswers = activeExam.questionStates?.map((qs) => qs.givenAnswerIds);
      console.log("Given Answers", givenAnswers);
      // map.map((a) => )
      activeExam.questionStates?.map((qs: QuestionState, index: number) => {
        const correctAnswers: string[] = exam.questions[index].answers.filter((a: Answer) => a.isCorrect).map((a: Answer) => a.id);
        const booleans = qs.givenAnswerIds.map((a) => correctAnswers.includes(a));
        console.log("boolean", booleans)

        // correctAnswers.forEach((cA) => ).includes(qs.givenAnswerIds)
      })
    }
  }, []);

  return (
      <Flex style={{height: '90vh'}}>
        <h1>Exam result</h1>
      </Flex>
  )
}
