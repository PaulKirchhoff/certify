import {Progress} from "antd";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {activeExamState} from "../store/ActiveExamStore";

interface TimerProps {
  time: number
}

export default function Timer({time}: TimerProps) {

  const [activeExam, setActiveExam] = useRecoilState(activeExamState);

  const [timer, setTimer] = useState(activeExam.timer! * 60);
  const [percent, setPercent] = useState((activeExam.timer! / (time * 60)) * 100);

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1)
      setActiveExam({...activeExam, timer: timer / 60})
      setPercent(parseFloat(((timer / (time * 60)) * 100).toFixed(2)))
    }, 1000)
  });

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
        alignContent: "center",
        width: '100%',
      }}>
        <h5>{calculateTimeString()}</h5>
        <Progress status="active" percent={percent} showInfo={false}/>
      </div>
  )
}
