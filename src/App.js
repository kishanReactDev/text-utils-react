import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null); 
    }, 1500);
  };

  const [label, setLabel] = useState('enable Dark mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setLabel('enable Light mode');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'TextUtils-Dark mode';
    } else {
      setMode('light');
      setLabel('enable Dark mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextUtils-Light mode';
    }
  };

  return (
    <>
      
      <Router>
        <Navbar title="TextUtils" toggleMode={toggleMode} label={label} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading='Try TextUtils - Word Counter, Character counter' mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
