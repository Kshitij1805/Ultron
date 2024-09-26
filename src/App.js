import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode,setMode] = useState('light');  //whether dark mode is enable or not


  const toggleMode=()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <div >
    <Navbar title="TextUtils" abouttext="About TextUtils" mode={mode} toggleMode={toggleMode} /> {/* Using props */}
    <TextForm heading='Enter the Text to analyze' mode={mode}/>
    </div>
    </>
  );
}

export default App;
//TextForm heading='Enter the Text to analyze'
// < About />