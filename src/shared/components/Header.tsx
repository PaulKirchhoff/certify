import {Flex} from "antd";
import {FaArrowAltCircleLeft, FaHome} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";
import {FaBrain} from "react-icons/fa6";

export default function Header() {

  const location = useLocation();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  }

  const goHome = () => {
    navigate('/');
  }

  const checkPathname = (): boolean => {
    return location.pathname !== '/exams/exam/result' && location.pathname !== '/';
  }

  return (
      <Flex vertical={false} align={"center"} style={{borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: 'rgba(218,218,218,0.83)', marginBottom: 10}}>
        {checkPathname() ? <FaArrowAltCircleLeft size={30} color={'#414141'} onClick={navigateBack}/> : <FaHome size={30} color={'#414141'} onClick={goHome} /> }
        <Flex vertical={true} flex={"auto"}>
          <Flex vertical={false} justify={"flex-end"} align={"center"}>
            <h2 style={{color: '#414141'}}>Certify&nbsp;&nbsp;</h2>
            <FaBrain color={'#414141'} size={30}/>
          </Flex>
        </Flex>
      </Flex>
  )
}
