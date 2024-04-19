import {Divider, Flex, Skeleton, Spin} from "antd";
import {useRecoilValue} from "recoil";
import {activeExamState} from "../domain/exam/store/ActiveExamStore";
import {useEffect, useState} from "react";
import {Exam, Exams} from "../domain/exam/types/Exams";
import ResultMessage from "../domain/result/components/ResultMessage";
import ChartSection from "../domain/result/components/ChartSection";

export default function ExamResult() {

  const activeExam = useRecoilValue(activeExamState);

  const [currentExam, setCurrentExam] = useState<Exam | null>(null);
  const [minPassingScorePercentage, setMinPassingScorePercentage] = useState(0);

  useEffect(() => {
    const exam: Exam | undefined = Exams.find((e: Exam) => e.id === activeExam.examId);
    if (exam) {
      setCurrentExam(exam);
      setMinPassingScorePercentage((exam.passingScore / exam.questions.length) * 100)
    }
  }, [activeExam.examId]);

  if (!currentExam) {
    return (
        <Spin tip="Loading" size="large">
          <Skeleton style={{width: '100%'}} active/>
          <Flex justify={"space-between"}>
            <Skeleton.Node fullSize={true} style={{width: 750, height: 500}} active/>
            <Skeleton.Node fullSize={true} style={{width: 750, height: 500}} active/>
          </Flex>
        </Spin>
    )
  }

  return (
      <Flex vertical={true} justify={"left"} align={"flex-start"} style={{height: '90vh', width: '100%'}}>
        <Flex vertical={false} justify={'space-between'} style={{width: '100%'}}>
          <h3>Certification Result: {currentExam?.title}</h3>
          <h3>{`PassingScore: ${minPassingScorePercentage}`}</h3>
        </Flex>
        <ResultMessage exam={currentExam} />
        <Divider/>
        <ChartSection exam={currentExam} />
      </Flex>
  )
}
