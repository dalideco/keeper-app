import React,{useState} from 'react';
import './App.scss';
import Navbar from  './components/Navbar';
import Main from './components/Main';

function App() {

  var [database,setdatabase] = useState([]);

  function adding(){
    setdatabase(old=>{
      return [...old, {id:54,header:"dali",description:"dalideco"}];
    });
  }

  return (
    <div className="App">
      <Navbar database={database} itsfunction={adding}/>
      <Main database={database}/>
    </div>
  );
}

export default App;
