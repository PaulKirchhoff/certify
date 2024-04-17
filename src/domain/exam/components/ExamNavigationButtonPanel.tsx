import {Button, Flex} from "antd";
import {FaArrowCircleLeft, FaArrowCircleRight, FaFlagCheckered} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {ActiveExamState, activeExamState} from "../store/ActiveExamStore";

interface ExamNavigationButtonPanelProps {
  children: any
}

export default function ExamNavigationButtonPanel({children}: ExamNavigationButtonPanelProps) {

  const navigate = useNavigate();
  const [activeExam, setActiveExam] = useRecoilState<ActiveExamState>(activeExamState);

  const setNextIndex = () => {
    setActiveExam({...activeExam, currentQuestionIndex: activeExam.currentQuestionIndex +1})
  }

  const setPreviousIndex = () => {
    setActiveExam({...activeExam, currentQuestionIndex: activeExam.currentQuestionIndex -1})
  }

  const finishExam = () => {
    navigate('/exams/exam/result')
  }

  return (
      <Flex align={"center"} justify={"space-between"} style={{width: '50%'}}>
        <Button disabled={activeExam.currentQuestionIndex === 0} type={"text"}>
          <FaArrowCircleLeft size={25} onClick={setPreviousIndex}/>
        </Button>
        {children}
        <Button disabled={activeExam.currentQuestionIndex === activeExam.questions.length - 1} type={"text"}>
          <FaArrowCircleRight size={25} onClick={setNextIndex}/>
        </Button>
        <Button style={{display: "flex", alignSelf: "center"}} type={"primary"} color={'red'} onClick={finishExam}>
          <FaFlagCheckered color={'white'} size={20}/>
        </Button>
      </Flex>
  )
}
