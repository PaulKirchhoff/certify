import {Button, Card, Divider, Flex} from "antd";
import {useLoaderData, useNavigate} from "react-router-dom";
import {Exams, Exam} from "../domain/exam/types/Exams";
import {useSetRecoilState} from "recoil";
import {activeExamState} from "../domain/exam/store/ActiveExamStore";
import {examTimerState} from "../domain/exam/store/ExamTimerStore";

export async function loader({params}: any) {
  const exam: Exam = Exams.filter((e) => e.id === params.examId)[0];
  return {exam}
}

export default function ExamDetails() {
  const navigate = useNavigate();
  const {exam} = useLoaderData() as { exam: Exam};

  const setActiveExam = useSetRecoilState(activeExamState);
  const setExamTimer = useSetRecoilState(examTimerState);

  const startExam = () => {
    setActiveExam({examId: exam.id, examTitle: exam.title, questionStates: []});
    setExamTimer({timer: exam.time})
    resetExam();
    navigate('start')
  }

  const resetExam = () => {
    exam.questions.forEach((q) => q.answers.forEach((a) => a.isSelected = false));
  }

  return (
      <Card>
        <Card.Meta
            title={exam.title}
            description={
              <Flex vertical={true} align={"center"}>
                <div>{exam.icon}</div>
                <div>{exam.description}</div>
                <div>Passing Score: {exam.passingScore}%</div>
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
