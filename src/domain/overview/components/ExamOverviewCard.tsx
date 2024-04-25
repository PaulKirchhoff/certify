import {Card, Col} from "antd";
import {useNavigate} from "react-router-dom";
import {Exam} from "../../exam/types/Exams";

interface ExamOverviewCardProps {
  exam: Exam
}

export default function ExamOverviewCard({exam}: ExamOverviewCardProps) {

  const navigate = useNavigate();

  const navigateToExam = () => {
    navigate(exam.path)
  }

  return (
      <Col span={8}>
        <Card
            hoverable
            onClick={navigateToExam}
            style={{
              background: exam.color,
              margin: 5,
            }}>
          {exam.icon}
          <h3>{exam.title}</h3>
        </Card>
      </Col>
  )
}
