import {Button, Card, Divider, Flex} from "antd";
import {NavigateFunction, useLoaderData, useNavigate} from "react-router-dom";
import {Exams, Exam} from "../domain/exam/types/Exams";
import {SetterOrUpdater, useSetRecoilState} from "recoil";
import {ActiveExamState, activeExamState} from "../domain/exam/store/ActiveExamStore";
import {examTimerState} from "../domain/exam/store/ExamTimerStore";
import {SelectedAnswer, selectedAnswersState} from "../domain/exam/store/SelectedAnswersStore";

export async function loader({params}: any) {
  const exam: Exam = Exams.filter((e: Exam) => e.id === params.examId)[0];
  return {exam}
}

export default function ExamDetails() {
  const navigate: NavigateFunction = useNavigate();
  const {exam} = useLoaderData() as { exam: Exam };

  const setActiveExam: SetterOrUpdater<ActiveExamState> = useSetRecoilState(activeExamState);
  const setExamTimerValue: SetterOrUpdater<number> = useSetRecoilState<number>(examTimerState);
  const setSelectedAnswers: SetterOrUpdater<SelectedAnswer[]> = useSetRecoilState(selectedAnswersState);

  const startExam = () => {
    setActiveExam({examId: exam.id, examTitle: exam.title, currentQuestionIndex: 0, questions: exam.questions});
    setSelectedAnswers([]);
    setExamTimerValue(exam.time)
    navigate('start')
  }

  return (
      <Card>
        <Card.Meta
            title={exam.title}
            description={
              <Flex vertical={true} align={"center"}>
                <div>{exam.icon}</div>
                <div>{exam.description}</div>
                <div>Passing Score: {(exam.passingScore / exam.questions.length) * 100}%</div>
                <div>Time: {exam.time} minutes</div>
                <div>Questions: {exam.questions.length}</div>
              </Flex>
            }
        />
        <Divider/>
        <Button type={"primary"} title={'Start'} onClick={startExam}>Start</Button>
      </Card>
  )
}
