import {Flex} from "antd";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaBrain} from "react-icons/fa6";

export default function Header() {

  const location = useLocation();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  }

  return (
      <Flex vertical={false} align={"center"} style={{borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: 'rgba(218,218,218,0.83)', marginBottom: 10}}>
        {location.pathname !== '/' && <FaArrowAltCircleLeft size={30} color={'#414141'} onClick={navigateBack}/>}
        <Flex vertical={true} flex={"auto"}>
          <Flex vertical={false} justify={"flex-end"} align={"center"}>
            <h2 style={{color: '#414141'}}>Certify</h2>
            <FaBrain color={'#414141'} size={30}/>
          </Flex>
        </Flex>
      </Flex>
  )
}
