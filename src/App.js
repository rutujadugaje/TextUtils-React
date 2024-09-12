import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import {
  HashRouter,
   Routes,
   Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enabled", "success");
       document.title = 'TextUtils - Dark mode';
      //  setInterval(() => {
      //   document.title = 'TextUtils is amazing mode';
      //  }, 2000);
      //  setInterval(() => {
      //   document.title ='Install TextUtils now ';
      //  }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - light mode';
    }
   
  }
  return (
    <>
      <HashRouter>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/> 
          {/* <About></About>      */}
          <div className="container my-3">
                <Routes>
                      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze below"  mode={mode}/>}>                
                      </Route>
                      <Route path="/about" element={<About about="about"></About>}>
                      </Route>
                </Routes>
            </div>
      </HashRouter>
    </>
  );
}

export default App;
