import {Card, Flex} from "antd";
import {useRecoilValue} from "recoil";
import {activeExamState} from "../domain/exam/store/ActiveExamStore";
import {useEffect, useState} from "react";
import {Exam, Exams} from "../domain/exam/types/Exams";
import {SelectedAnswer} from "../domain/exam/store/SelectedAnswersStore";
import {isEqual} from 'lodash';
import {
  getCorrectAnswersFromActiveExamQuestions,
  getCorrectAnswersFromExamQuestions,
  getQuestionsByCategory,
} from "../domain/result/services/ResultService";
import PieChartResult from "../domain/result/components/charts/PieChartResult";
import TreeMapResult from "../domain/result/components/charts/TreeMapResult";
import StackedBarChartResult from "../domain/result/components/charts/StackedBarChartResult";
import {buildPieChartData, buildStackedBarChartData} from "../domain/result/services/ChartService";

export default function ExamResult() {

  const activeExam = useRecoilValue(activeExamState);

  const [currentExam, setCurrentExam] = useState<Exam | null>(null);
  const [examPercentResult, setExamPercentResult] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [successExam, setSuccessExam] = useState(false);
  const [pieChartData, setPieChartData] = useState<any[]>([]);


  useEffect(() => {
    const exam: Exam | undefined = Exams.find((e: Exam) => e.id === activeExam.examId);
    if (exam) {
      setCurrentExam(exam);

      const activeExamQuestionsByCategory: any = getQuestionsByCategory(activeExam.questions);
      const examQuestions: any = getQuestionsByCategory(exam.questions)
      setPieChartData(buildPieChartData(examQuestions));

      const correctAnswersFromExam: SelectedAnswer[] = getCorrectAnswersFromExamQuestions(exam.questions);
      const correctAnswersFromActiveExam: SelectedAnswer[] = getCorrectAnswersFromActiveExamQuestions(activeExam.questions);


      buildStackedBarChartData(examQuestions, activeExamQuestionsByCategory)


      calculateSuccess(exam, correctAnswersFromExam, correctAnswersFromActiveExam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctAnswersCount]);

  const calculateSuccess = (exam: Exam, examAnswers: SelectedAnswer[], activeExamAnswers: SelectedAnswer[]) => {

    setCorrectAnswersCount(examAnswers.map((ca, index) => (isEqual(ca, activeExamAnswers[index]))).filter((r) => r).length);
    setExamPercentResult((correctAnswersCount / exam.questions.length) * 100);
    setSuccessExam(exam.passingScore <= correctAnswersCount);
  }

  return (
      <div>
        <Flex vertical={true} justify={"left"} align={"flex-start"} style={{height: '90vh', width: '100%'}}>
          <h3>Certification result: {currentExam?.title}</h3>
          <Flex style={{width: '100%'}} justify={"space-between"}>
            {successExam ?
                <h4 style={{color: 'green'}}>Congratulations! You have passed the exam.</h4> :
                <h4 style={{color: 'red'}}>Unfortunately, it wasn't enough today. Just try again</h4>
            }
            <h4>Correct Questions {correctAnswersCount} / {currentExam?.questions.length}</h4>
          </Flex>
          <Flex justify={'flex-start'} align={"center"} style={{height: '80vh', maxWidth: '100%'}}>
            {/*<Card title={'skmskm'} style={{margin: 10}}><TreeMapResult /></Card>*/}
            <Card title={'kndkn'} style={{margin: 10}}><PieChartResult data={pieChartData}/></Card>
            <Card title={'jj  '} style={{margin: 10}}><StackedBarChartResult /></Card>
          </Flex>
        </Flex>
      </div>
  )
}
