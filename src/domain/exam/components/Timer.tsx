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

  const [examTimerValue, setExamTimerValue] = useRecoilState<number>(examTimerState);

  const [timer, setTimer] = useState(examTimerValue! * 60);
  const [percent, setPercent] = useState((examTimerValue! / (time * 60)) * 100);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(timer - 1)
        setExamTimerValue(timer / 60)
        setPercent(parseFloat(((timer / (time * 60)) * 100).toFixed(2)))
      }, 1000);
      return () =>  clearInterval(intervalId);
    }
  });

  useEffect(() => {
    if (examTimerValue && examTimerValue < 0.02) {
      navigate('/exams/exam/result', {replace: true});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examTimerValue]);

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
