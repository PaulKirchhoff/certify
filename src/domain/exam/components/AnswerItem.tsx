import {Answer} from "../types/Answer";
import Paragraph from "antd/es/typography/Paragraph";
import {Flex, Switch} from "antd";

interface AnswerItemProps {
  answer: Answer,
  handleSelectedAnswer: any,
  questionId: string
}

export default function AnswerItem({answer, handleSelectedAnswer, questionId}: AnswerItemProps) {
  const selectAnswer = (event: any) => {
    answer.isSelected = event;
    handleSelectedAnswer(answer.id, event)
  }

  return (
      <Flex justify={"space-between"}>
        <Flex vertical={false} style={{paddingBottom: 15}}>
          <Paragraph>{answer.id}) </Paragraph>
          <Paragraph>{answer.answer}</Paragraph>
        </Flex>
        <Switch style={{color: 'green'}} value={answer.isSelected} onClick={selectAnswer}/>
      </Flex>
  )
}
