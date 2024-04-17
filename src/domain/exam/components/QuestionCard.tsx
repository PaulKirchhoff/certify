import {Card, Divider, Flex, List} from "antd";
import {Question} from "../types/Question";
import {Answer} from "../types/Answer";
import AnswerItem from "./AnswerItem";
import {useRecoilValue} from "recoil";
import {ActiveExamState, activeExamState} from "../store/ActiveExamStore";
import QuestionCardTitle from "./QuestionCardTitle";
import {CodeBlock} from "react-code-blocks";

interface QuestionCardProps {
  question: Question
}

export default function QuestionCard({question}: QuestionCardProps) {

  const activeExam: ActiveExamState = useRecoilValue<ActiveExamState>(activeExamState);

  const renderAnswers = (answer: Answer) => {
    return <AnswerItem key={answer.id} answer={answer}/>
  }

  return (
      <Card style={{
        width: '90%',
        // maxHeight: '90%'
      }}
            title={<QuestionCardTitle/>}
      >
        <Flex vertical={true} justify={"space-between"}>
          <h4 style={{textAlign: "left"}}>{activeExam.questions[activeExam.currentQuestionIndex].question}</h4>
        </Flex>
        <Divider/>
        {question.code &&
            <Flex vertical={true}>
              <CodeBlock
                  codeContainerStyle={{textAlign: 'left'}}
                  customStyle={{width: '100%'}}
                  text={question.code}
                  language={'jsx'}
                  showLineNumbers={true}
              />
              <Divider/>
            </Flex>
        }
        <List renderItem={renderAnswers} dataSource={activeExam.questions[activeExam.currentQuestionIndex].answers}/>
      </Card>
  )
}
