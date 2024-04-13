import {Card, List} from "antd";
import {Question} from "../types/Question";
import {Answer} from "../types/Answer";
import AnswerItem from "./AnswerItem";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {ActiveExamState, activeExamState, QuestionState} from "../store/ActiveExamStore";
import {useEffect, useState} from "react";

interface QuestionCardProps {
  question: Question
  index: number
}
export default function QuestionCard({question, index}: QuestionCardProps) {

  const setActiveExam = useSetRecoilState(activeExamState);
  const activeExam = useRecoilValue(activeExamState);

  const [localSelectedAnswers, setLocalSelectedAnswers] = useState<string[]>([]);

  useEffect(() => {
    setLocalSelectedAnswers(activeExam.questionStates?.find((q) => q.questionId === question.id)?.givenAnswerIds || []);
    setActiveExam({...activeExam, currentQuestionId: question.id});
    if (activeExam.questionStates?.filter((q) => q.questionId === question.id).length === 0) {
      createNewQuestionState();
    }
  }, [question]);

  useEffect(() => {
    setActiveExam({
      ...activeExam,
      questionStates: [
          ...activeExam.questionStates?.filter((q) => q.questionId !== question.id) || [],
        {
          questionId: question.id,
          givenAnswerIds: localSelectedAnswers
        }
      ]
    })
  }, [localSelectedAnswers]);

  const createNewQuestionState = () => {
    setLocalSelectedAnswers([]);
    const questionState: QuestionState = {
      questionId: question.id,
      givenAnswerIds: [],
    };
    setActiveExam({...activeExam, questionStates: [...activeExam.questionStates!, questionState]})
  }

  const handleSelectedAnswers = (answerId: string, value: boolean) => {
    if (localSelectedAnswers.find((id) => id === answerId)) {
      setLocalSelectedAnswers(localSelectedAnswers.filter((id) => answerId !== id));
    } else {
      setLocalSelectedAnswers([...localSelectedAnswers, answerId]);
    }
  }

  const renderAnswers = (answer: Answer) => {
    return <AnswerItem answer={answer} handleSelectedAnswer={handleSelectedAnswers} questionId={question.id}/>
  }

  return (
      <Card style={{width: '90%', height: '90%'}}  title={question.question}>
        <List renderItem={renderAnswers} dataSource={question.answers} />
      </Card>
  )
}