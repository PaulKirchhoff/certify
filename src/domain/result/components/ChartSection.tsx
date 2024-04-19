import {Card, Flex} from "antd";
import PieChartResult from "./charts/PieChartResult";
import StackedBarChartResult from "./charts/StackedBarChartResult";
import {PieChartData} from "../types/PieChartData";
import {StackedBarChartData} from "../types/StackedBarChartData";
import {useEffect, useState} from "react";
import {getQuestionsByCategory} from "../services/ResultService";
import {buildPieChartData, buildStackedBarChartData} from "../services/ChartService";
import {Exam} from "../../exam/types/Exams";
import {useRecoilValue} from "recoil";
import {ActiveExamState, activeExamState} from "../../exam/store/ActiveExamStore";
interface ChartSectionProps {
  exam: Exam
}
export default function ChartSection({exam} : ChartSectionProps) {

  const activeExam: ActiveExamState = useRecoilValue(activeExamState);

  const [pieChartData, setPieChartData] = useState<PieChartData[]>([]);
  const [stackedBarChartData, setStackedBarChartData] = useState<StackedBarChartData[]>([]);

  useEffect(() => {
    const examQuestions: any = getQuestionsByCategory(exam.questions)
    setPieChartData(buildPieChartData(examQuestions));
    setStackedBarChartData(buildStackedBarChartData(exam.questions, activeExam.questions));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <Flex justify={'center'} align={"center"} style={{width: '100%'}}>
        <Card title={'Categories'} style={{margin: 10, width: '50%'}}>
          <PieChartResult data={pieChartData}/>
        </Card>
        <Card title={'Question results'} style={{margin: 10, width: '50%'}}>
          <StackedBarChartResult data={stackedBarChartData}/>
        </Card>
      </Flex>
  )
}
