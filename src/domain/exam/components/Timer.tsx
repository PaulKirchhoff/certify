import {Progress} from "antd";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import {examTimerState} from "../store/ExamTimerStore";

interface TimerProps {
  time: number
}

export default function Timer({time}: TimerProps) {

  const navigate = useNavigate();

  const [examTimer, setExamTimer] = useRecoilState(examTimerState);

  const [timer, setTimer] = useState(examTimer.timer! * 60);
  const [percent, setPercent] = useState((examTimer.timer! / (time * 60)) * 100);

  useEffect(() => {
    if (timer > 0)
    setTimeout(() => {
      setTimer(timer - 1)
      setExamTimer({...examTimer, timer: timer /60})
      setPercent(parseFloat(((timer / (time * 60)) * 100).toFixed(2)))
    }, 1000)
  });

  useEffect(() => {
    if (examTimer.timer && examTimer.timer < 0.02) {
      navigate('/exams/exam/result');
    }
  }, [examTimer.timer]);

  const calculateTimeString = (): string => {
    const totalSeconds = timer;
    const minutesPart = Math.floor(totalSeconds / 60);
    const secondsPart = totalSeconds % 60;

    const formattedMinutes = minutesPart < 10 ? `0${minutesPart}` : `${minutesPart}`;
    const formattedSeconds = secondsPart < 10 ? `0${secondsPart}` : `${secondsPart}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: '100%',
      }}>
        <h5>{calculateTimeString()}</h5>
        <Progress status="active" percent={percent} showInfo={false}/>
      </div>
  )
}
