import React from 'react';
import './App.css';
import Header from "./shared/components/Header";
import {Link, Location, Outlet, useLocation} from "react-router-dom";
import {FaCertificate} from "react-icons/fa";
import {Flex} from "antd";

function App() {

  const location: Location<any> = useLocation();

  return (
      <div className="App">
        <Header/>
        <div>
          {location.pathname === '/' &&
              <div style={{padding: 50}}>
                <Link to={'exams'} style={{textDecoration: "none"}}>
                  <Flex vertical={true} justify={"center"} align={"center"}>
                    <FaCertificate size={60}/>
                    Show All Exams
                  </Flex>
                </Link>
              </div>
          }
        </div>
        <Outlet/>
      </div>
  );
}

export default App;
