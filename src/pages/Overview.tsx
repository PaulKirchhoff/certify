import {Row} from "antd";
import ExamOverviewCard from "../domain/overview/components/ExamOverviewCard";
import {Exam, Exams} from "../domain/exam/types/Exams";
import {useLoaderData} from "react-router-dom";

export async function loader() {
  const exams: Exam[] = Exams;
  return {exams};
}

export default function Overview() {
  // @ts-ignore
  const {exams} = useLoaderData();
  const renderOverviewCard = (exam: Exam) => {
    return <ExamOverviewCard key={exam.id} exam={exam}/>
  }

  return (
      <Row gutter={12}>
        {exams.map((exam: Exam) => renderOverviewCard(exam))}
      </Row>
  )
}
