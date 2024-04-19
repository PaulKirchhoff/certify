import {Answer} from "../types/Answer";
import Paragraph from "antd/es/typography/Paragraph";
import {Flex, Switch} from "antd";
import {useRecoilState} from "recoil";
import {ActiveExamState, activeExamState} from "../store/ActiveExamStore";
import {Question} from "../types/Question";

interface AnswerItemProps {
  answer: Answer
}

export default function AnswerItem({answer}: AnswerItemProps) {

  const [activeExam, setActiveExam] = useRecoilState<ActiveExamState>(activeExamState);

  function updateAnswerSelectionInActiveExam(selected: boolean) {
    // create temporary answer for splice
    const tempAnswer: Answer = {
      ...answer,
      isSelected: selected
    }

    // get index from answer for splice
    const answerIndex: number = activeExam.questions[activeExam.currentQuestionIndex].answers.findIndex((a: Answer) => a.id === answer.id)
    // create temporary question for splice
    const tempQuestion: Question = {
      ...activeExam.questions[activeExam.currentQuestionIndex],
      answers: [...activeExam.questions[activeExam.currentQuestionIndex].answers]
    }
    tempQuestion.answers.splice(answerIndex, 1, tempAnswer);

    // get question index for splice
    const questionIndex: number = activeExam.questions.findIndex((q) => q.id === answer.questionId);

    // create temporary questions array for splice
    const tempQuestions: Question[] = [...activeExam.questions];
    tempQuestions.splice(questionIndex, 1, tempQuestion);

    // set updated question[] back to state
    setActiveExam({...activeExam, questions: tempQuestions})
  }

  return (
      <Flex justify={"space-between"}>
        <Flex vertical={false} style={{paddingBottom: 15}}>
          <Paragraph><b>{answer.id})&nbsp;&nbsp;&nbsp;</b></Paragraph>
          <Paragraph>{answer.answer}</Paragraph>
        </Flex>
        <Switch
            style={{color: 'green'}}
            value={activeExam.questions[activeExam.currentQuestionIndex].answers.filter((a) => a.id === answer.id)[0].isSelected}
            onClick={updateAnswerSelectionInActiveExam}
        />
      </Flex>
  )
}
