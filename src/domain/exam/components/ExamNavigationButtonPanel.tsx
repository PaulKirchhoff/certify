import {Button, Flex} from "antd";
import {FaArrowCircleLeft, FaArrowCircleRight, FaFlagCheckered} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

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

  const navigate = useNavigate();

  const setNextIndex = () => {
    setQuestionIndex(questionIndex + 1);
  }

  const setPreviousIndex = () => {
    setQuestionIndex(questionIndex - 1);
  }

  const finishExam = () => {
    navigate('/exams/exam/result')
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
        <Button style={{display: "flex", alignSelf: "center"}} type={"primary"} color={'red'} onClick={finishExam}>
          <FaFlagCheckered color={'white'} size={20}/>
        </Button>
      </Flex>
  )
}
