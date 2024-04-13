import {Button, Flex} from "antd";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";

interface ExamNavigationButtonPanelProps {
  questionIndex: number
  setQuestionIndex: any,
  questionsLength: number,
  children: any
}

export default function ExamNavigationButtonPanel({
                                                    questionIndex,
                                                    setQuestionIndex,
                                                    questionsLength,
                                                    children
                                                  }: ExamNavigationButtonPanelProps) {

  const setNextIndex = () => {
    setQuestionIndex(questionIndex + 1);
  }

  const setPreviousIndex = () => {
    setQuestionIndex(questionIndex - 1);
  }

  return (
      <Flex align={"center"} justify={"space-between"} style={{width: '50%'}}>
        <Button disabled={questionIndex === 0} type={"text"}>
          <FaArrowCircleLeft size={25} onClick={setPreviousIndex}/>
        </Button>
        {children}
        <Button disabled={questionIndex === questionsLength - 1} type={"text"}>
          <FaArrowCircleRight size={25} onClick={setNextIndex}/>
        </Button>
      </Flex>
  )
}
