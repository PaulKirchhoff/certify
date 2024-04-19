import {Flex, Spin} from "antd";
import {useEffect, useState} from "react";
import {Exam} from "../../exam/types/Exams";
import {SelectedAnswer} from "../../exam/store/SelectedAnswersStore";
import {isEqual} from "lodash";
import {getCorrectAnswersFromActiveExamQuestions, getCorrectAnswersFromExamQuestions} from "../services/ResultService";
import {useRecoilValue} from "recoil";
import {activeExamState} from "../../exam/store/ActiveExamStore";

interface ResultMessageProps {
  exam: Exam
}
export default function ResultMessage({exam}: ResultMessageProps) {

  const activeExam = useRecoilValue(activeExamState);

  const [loading, setLoading] = useState(true);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const [examPercentResult, setExamPercentResult] = useState(0);

  useEffect(() => {
    const correctAnswersFromExam: SelectedAnswer[] = getCorrectAnswersFromExamQuestions(exam.questions);
    const correctAnswersFromActiveExam: SelectedAnswer[] = getCorrectAnswersFromActiveExamQuestions(activeExam.questions);
    calculateSuccess(exam, correctAnswersFromExam, correctAnswersFromActiveExam);
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const calculateSuccess = (exam: Exam, examAnswers: SelectedAnswer[], activeExamAnswers: SelectedAnswer[]) => {
    setCorrectAnswersCount(examAnswers.map((ca: SelectedAnswer, index: number) => (isEqual(ca, activeExamAnswers[index]))).filter((r: boolean) => r).length);
    setExamPercentResult((correctAnswersCount / exam.questions.length) * 100);
    setSuccess(exam.passingScore <= correctAnswersCount);
  }

  if (loading) {
    return (
        <Spin spinning={true} size={'large'}></Spin>
    )
  }

  return (
      <Flex style={{width: '100%'}} justify={"space-between"}>
        {success ?
            <h4 style={{color: 'green'}}>{`Congratulations! You have passed the exam. You have achieved ${examPercentResult}% of the points.`}</h4> :
            <h4 style={{color: 'red'}}>{`Unfortunately, it wasn't enough today. You have achieved ${examPercentResult}% of the points.`}</h4>
        }
        <h4>Correct Questions {correctAnswersCount} / {exam.questions.length}</h4>
      </Flex>
  )
}
