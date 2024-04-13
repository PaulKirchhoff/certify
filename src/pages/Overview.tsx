import {Flex, Row} from "antd";
import ExamOverviewCard from "../domain/overview/components/ExamOverviewCard";
import {Exam, Exams} from "../domain/exam/types/Exams";
import {useLoaderData} from "react-router-dom";

const style: React.CSSProperties = {background: '#bedeff', padding: '8px 0'};

export async function loader() {
  const exams: Exam[] = Exams;
  return { exams };
}
export default function Overview() {
  // @ts-ignore
  const {exams} = useLoaderData();
  const renderOverviewCard = (exam: Exam) => {
    return <ExamOverviewCard key={exam.id} exam={exam} />
  }

  return (
      <Flex>
        <Row gutter={12}>
          {exams.map((exam: Exam) => renderOverviewCard(exam))}
        </Row>
      </Flex>
  )
}
