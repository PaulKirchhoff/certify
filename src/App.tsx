import React from 'react';
import './App.css';
import Header from "./shared/components/Header";
import {Link, Outlet, useLocation} from "react-router-dom";

function App() {

  const location = useLocation();

  return (
      <div className="App">
        <Header/>
        <div>
          {location.pathname === '/' && <div style={{padding: 50}}><Link to={'exams'}>Show Exams</Link></div>}
        </div>
        <Outlet/>
      </div>
  );
}

export default App;
