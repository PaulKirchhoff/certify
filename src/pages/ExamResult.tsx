import {Flex} from "antd";
import {useRecoilValue} from "recoil";
import {activeExamState} from "../domain/exam/store/ActiveExamStore";
import {useEffect, useState} from "react";
import {Exam, Exams} from "../domain/exam/types/Exams";
import {SelectedAnswer, selectedAnswersState} from "../domain/exam/store/SelectedAnswersStore";
import {isEqual} from 'lodash';
import {
  calculateProRataPercentage,
  getCorrectAnswersFromExam,
  getQuestionsByCategory,
  getSelectedAnswers
} from "../domain/result/services/ResultService";

export default function ExamResult() {

  const activeExam = useRecoilValue(activeExamState);
  const selectedAnswers: SelectedAnswer[] = useRecoilValue(selectedAnswersState);

  const [examPercentResult, setExamPercentResult] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [currentExam, setCurrentExam] = useState<Exam | null>(null);
  const [successExam, setSuccessExam] = useState(false);


  useEffect(() => {
    const exam: Exam | undefined = Exams.find((e: Exam) => e.id === activeExam.examId);
    if (exam) {
      const examQuestions: any = getQuestionsByCategory(exam.questions)
      const activeExamQuestions: any = getQuestionsByCategory(activeExam.questions);
      calculateProRataPercentage(examQuestions, exam.questions.length)
      console.log("Exam", examQuestions)
      console.log("ActiveExam", examQuestions)
      setCurrentExam(exam);
      // calculateSuccess(exam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctAnswersCount]);

  const calculateSuccess = (exam: Exam) => {
    const correctAnswers: SelectedAnswer[] = getCorrectAnswersFromExam(exam);
    const answers: SelectedAnswer[] = getSelectedAnswers(selectedAnswers);
    setCorrectAnswersCount(correctAnswers.map((ca, index) => (isEqual(ca, answers[index]))).filter((r) => r).length);
    setExamPercentResult((correctAnswersCount / exam.questions.length) * 100);
    setSuccessExam(exam.passingScore <= correctAnswersCount);
  }

  return (
      <Flex vertical={true} justify={"left"} align={"flex-start"} style={{height: '90vh', width: '100%'}}>
        <h3>Certification result: {currentExam?.title}</h3>
        <Flex style={{width: '100%'}} justify={"space-between"}>
          {successExam ?
              <h4 style={{color: 'green'}}>Congratulations! You have passed the exam.</h4> :
              <h4 style={{color: 'red'}}>Unfortunately, it wasn't enough today. Just try again</h4>
          }
          <h4>Correct Questions {correctAnswersCount} / {currentExam?.questions.length}</h4>
        </Flex>
      </Flex>
  )
}
