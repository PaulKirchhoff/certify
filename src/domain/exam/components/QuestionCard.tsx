import {Card, Divider, List} from "antd";
import {Question} from "../types/Question";
import {Answer} from "../types/Answer";
import AnswerItem from "./AnswerItem";
import {useRecoilState} from "recoil";
import {activeExamState} from "../store/ActiveExamStore";
import {useEffect, useState} from "react";
import {SelectedAnswer, selectedAnswersState} from "../store/SelectedAnswersStore";

interface QuestionCardProps {
  question: Question
}

export default function QuestionCard({question}: QuestionCardProps) {

  const [activeExam, setActiveExam] = useRecoilState(activeExamState);
  const [selectedAnswers, setSelectedAnswers] = useRecoilState(selectedAnswersState);

  const [tempSelectedAnswers, setTempSelectedAnswers] = useState<string[]>([]);

  useEffect(() => {
    setTempSelectedAnswers(selectedAnswers?.find((sa: SelectedAnswer) => sa.questionId === question.id)?.selectedAnswers || []);
    setActiveExam({...activeExam, currentQuestionId: question.id});
    if (selectedAnswers.filter((sa: SelectedAnswer) => sa.questionId === question.id).length === 0) {
      createNewSelectedAnswer();
    }
  }, [question]);

  useEffect(() => {
    setSelectedAnswers([
      ...selectedAnswers.filter((sa: SelectedAnswer) => sa.questionId !== question.id) || [],
      {
        questionId: question.id,
        selectedAnswers: tempSelectedAnswers
      }
    ])
  }, [tempSelectedAnswers]);

  const createNewSelectedAnswer = () => {
    const selectedAnswerTemp: SelectedAnswer = {
      questionId: question.id,
      selectedAnswers: []
    };
    setSelectedAnswers([...selectedAnswers, selectedAnswerTemp])
  }

  const handleTempSelectedAnswers = (answerId: string) => {
    if (tempSelectedAnswers.find((id: string) => id === answerId)) {
      setTempSelectedAnswers(tempSelectedAnswers.filter((id: string) => answerId !== id));
    } else {
      setTempSelectedAnswers([...tempSelectedAnswers, answerId]);
    }
  }

  const renderAnswers = (answer: Answer) => {
    return <AnswerItem
        key={answer.id}
        answer={answer}
        handleSelectedAnswer={handleTempSelectedAnswers}
        questionId={question.id}
    />
  }

  return (
      <Card style={{width: '90%', maxHeight: '90%'}} title={question.question}>
        {question.code &&
            <span style={{textAlign: "left"}}>
                <pre>
                  <code>
                    <b style={{fontSize: 12}}>{question.code}</b>
                  </code>
                </pre>
              <Divider/>
            </span>
        }
        <List renderItem={renderAnswers} dataSource={question.answers}/>
      </Card>
  )
}
